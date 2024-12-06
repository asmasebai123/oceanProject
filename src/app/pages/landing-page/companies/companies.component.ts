import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    AnimateComponentDirective
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

}
