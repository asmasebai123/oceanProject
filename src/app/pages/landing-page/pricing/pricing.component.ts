import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    NgIf,
    AnimateComponentDirective
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  //payment mothod anually => paymentMethod == false
  paymentMethod: boolean = false;

setPaymentMethod(method : string) {
this.paymentMethod = method === 'annual'? false : true;
}

}
