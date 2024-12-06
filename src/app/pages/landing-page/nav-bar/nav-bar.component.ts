import {Component, EventEmitter, HostListener, Inject, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {NgClass, NgIf, isPlatformBrowser} from "@angular/common";
import {IntroductionComponent} from "../introduction/introduction.component";
import {FunctionalitiesComponent} from "../functionalities/functionalities.component";
import {NavigationExtras, RouterLink, Router, RouterOutlet} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    IntroductionComponent,
    FunctionalitiesComponent,
    RouterLink,
    NgIf,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  isScrolled : boolean = false;
  menuOpen = false;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
              private sharedService: SharedService) {
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToSection(sectionId: string): void {
    this.sharedService.sendEvent({ data: sectionId });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.menuOpen = false;
    }
  }

  login(){
    this.newItemEvent.emit("true");
    
    this.sharedService.showLandingPage = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.isScrolled = window.scrollY > 100 || this.sharedService.isScrolled;
  }

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 100;
    }
  }

}
