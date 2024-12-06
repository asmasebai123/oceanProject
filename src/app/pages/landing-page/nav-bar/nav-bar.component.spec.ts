import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;
  activeSection = '';
  menuItems = [
    { label: 'Fonctionnalités', section: 'fonctionnalités' },
    { label: 'Avantages', section: 'avantages' },
    { label: 'Tarification', section: 'tarification' },
    { label: 'Entreprise', section: 'entreprise' },
    { label: 'Contacts', section: 'contacts' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToSection(section: string) {
    this.activeSection = section;
    // Implement scroll logic here if needed
    console.log(`Navigating to section: ${section}`);
  }

  login() {
    console.log('Navigate to login page');
    // Implement login navigation logic here
  }
}
