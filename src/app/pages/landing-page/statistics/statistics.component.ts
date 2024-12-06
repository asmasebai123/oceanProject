import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {CountUpDirective} from "../../../count-up.directive";
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    CountUpDirective,
    AnimateComponentDirective
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit{

  statists1: number = 100;
  statists2: number = 300;
  statists3: number = 50;
  statists4: number = 95;


  constructor() {
  }

  ngOnInit() {
  }

}
