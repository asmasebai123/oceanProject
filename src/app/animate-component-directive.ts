import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[animateComponentDirective]'
})
export class AnimateComponentDirective implements OnInit {
  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object,) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'translateY(-70px)');
          this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
          this.observer.unobserve(this.elementRef.nativeElement);
        }
      });
    });

    this.observer.observe(this.elementRef.nativeElement);
  }
  }
}
