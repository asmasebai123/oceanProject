import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-salinite',
  standalone: true,
  imports: [
    NgIf,
    AnimateComponentDirective
  ],
  templateUrl: './salinite.component.html',
  styleUrl: './salinite.component.scss'
})
export class SaliniteComponent {

setPaymentMethod() {
}

}
