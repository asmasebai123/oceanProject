import { Component, OnInit, } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { BonesComponent } from "./pages/landing-page/bones/bones.component";
import { FunctionalitiesComponent } from "./pages/landing-page/functionalities/functionalities.component";
import { IntroductionComponent } from "./pages/landing-page/introduction/introduction.component";
import { NavBarComponent } from "./pages/landing-page/nav-bar/nav-bar.component";
import { SaliniteComponent } from './pages/landing-page/salinite/salinite.component';
import { SharedService } from "./services/shared.service";
import { CirComponent } from './pages/landing-page/cir/cir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavBarComponent,
    FunctionalitiesComponent,
    IntroductionComponent,
    CirComponent,
    BonesComponent,
    ToastModule,
    SaliniteComponent],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  showLandingPage = this.sharedService.showLandingPage;
  title = 'saas-front';
  eventSubscription: Subscription = new Subscription();

  constructor(private router: Router,
    private messageService: MessageService,
              private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.eventSubscription = this.sharedService.event$.subscribe(event => {
      this.scrollToSection(event.data);
    });

  }

  showLogin(){
    this.showLandingPage = true;
  }

  hideConnexionPage($event: Event) {    
    this.showLandingPage = false;
    setTimeout(() => {
      this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'nous avons réussis votre mail merci de choisir votre offre' });
      this.scrollToSection('tarification');
    }, 1000);
    
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "start"});
    }
  }
}
