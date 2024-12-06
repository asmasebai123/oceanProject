import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

  constructor(private router: Router,
              private sharedService: SharedService) {
  }

  navigateToSection(sectionId: string): void {
    this.sharedService.sendEvent({ data: sectionId });
    this.router.navigateByUrl(`#${sectionId}`);
  }

}
