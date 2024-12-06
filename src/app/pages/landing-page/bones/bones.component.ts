import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-bones',
  standalone: true,
    imports: [
        AnimateComponentDirective,
    ],
  templateUrl: './bones.component.html',
  styleUrl: './bones.component.scss'
})
export class BonesComponent {

}
