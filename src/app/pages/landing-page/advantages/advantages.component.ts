import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    AnimateComponentDirective
  ],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {
  advantageCardNumber :number = 1;
  isClicked: Map<string, boolean>
  constructor() {
    const initialStates = {
      1: true,
      2: false,
      3: false,
      4: false,
    };
    this.isClicked = new Map(Object.entries(initialStates));
  }

  changeAdvantageCardNumber(cardNumber: number) {
    this.advantageCardNumber = cardNumber;
    this.isClicked.forEach((value, key,map) => map.set(key,false));
    this.isClicked.set(String(cardNumber),!this.isClicked.get(String(cardNumber)))
  }
}
