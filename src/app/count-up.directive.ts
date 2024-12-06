import { Directive, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import {
  animationFrameScheduler,
  BehaviorSubject,
  combineLatest,
  switchMap,
  map,
  interval,
  takeWhile,
  endWith,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';
import { Destroy } from './destroy';
import { isPlatformBrowser } from '@angular/common';

const easeOutQuad = (x: number): number => x * (2 - x);

@Directive({
  standalone:true,
  selector: '[countUp]',
  providers: [Destroy],
})
export class CountUpDirective implements OnInit {
  private readonly count$ = new BehaviorSubject(0);
  private readonly duration$ = new BehaviorSubject(2000);

  private readonly currentCount$ = combineLatest([
    this.count$,
    this.duration$,
  ]).pipe(
    switchMap(([count, duration]) => {
      // get the time when animation is triggered
      const startTime = animationFrameScheduler.now();

      return interval(0, animationFrameScheduler).pipe(
        // calculate elapsed time
        map(() => animationFrameScheduler.now() - startTime),
        // calculate progress
        map((elapsedTime) => elapsedTime / duration),
        // complete when progress is greater than 1
        takeWhile((progress) => progress <= 1),
        // apply quadratic ease-out
        // for faster start and slower end of counting
        map(easeOutQuad),
        // calculate current count
        map((progress) => Math.round(progress * count)),
        // make sure that last emitted value is count
        endWith(count),
        distinctUntilChanged()
      );
    })
  );

  @Input('countUp')
  set count(count: number) {
    this.count$.next(count);
  }

  @Input()
  set duration(duration: number) {
    this.duration$.next(duration);
  }
  private observer!: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly destroy$: Destroy
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.displayCurrentCount();
          this.observer.unobserve(this.elementRef.nativeElement);
        }
      });
    });

    this.observer.observe(this.elementRef.nativeElement);
  }
}

  private displayCurrentCount(): void {
    this.currentCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentCount) => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          currentCount
        );
      });
  }
}
