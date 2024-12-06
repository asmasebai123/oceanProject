import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-enterprise',
  standalone: true,
    imports: [
        AnimateComponentDirective,
        NgIf
    ],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss'
})
export class EnterpriseComponent {

}
