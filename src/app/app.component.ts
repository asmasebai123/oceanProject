import {Component, ComponentRef, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavBarComponent} from "./pages/landing-page/nav-bar/nav-bar.component";
import {CompaniesComponent} from "./pages/landing-page/companies/companies.component";
import {FunctionalitiesComponent} from "./pages/landing-page/functionalities/functionalities.component";
import {IntroductionComponent} from "./pages/landing-page/introduction/introduction.component";
import {AdvantagesComponent} from "./pages/landing-page/advantages/advantages.component";
import {StatisticsComponent} from "./pages/landing-page/statistics/statistics.component";
import {DemoComponent} from "./pages/landing-page/demo/demo.component";
import {FooterComponent} from "./pages/landing-page/footer/footer.component";
import { Subscription, timeout } from 'rxjs';
import {SharedService} from "./services/shared.service";
import {BonesComponent} from "./pages/landing-page/bones/bones.component";
import {ProductivityComponent} from "./pages/landing-page/productivity/productivity.component";
import {AiComponent} from "./pages/landing-page/ai/ai.component";
import {IntegrationsComponent} from "./pages/landing-page/integrations/integrations.component";
import {ContactComponent} from "./pages/landing-page/contact/contact.component";
import { ConnexionComponent } from './pages/landing-page/connexion/connexion.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SaliniteComponent } from './pages/landing-page/salinite/salinite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavBarComponent,
    CompaniesComponent,
    FunctionalitiesComponent,
    IntroductionComponent,
    AdvantagesComponent,
    StatisticsComponent,
    DemoComponent,
    FooterComponent,
    BonesComponent,
    ProductivityComponent,
    AiComponent,
    IntegrationsComponent,
    ContactComponent,
    ToastModule,
    ConnexionComponent,
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
