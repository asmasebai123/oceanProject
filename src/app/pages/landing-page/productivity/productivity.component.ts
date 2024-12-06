import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-productivity',
  standalone: true,
  imports: [AnimateComponentDirective],
  templateUrl: './productivity.component.html',
  styleUrl: './productivity.component.scss'
})
export class ProductivityComponent {

}
