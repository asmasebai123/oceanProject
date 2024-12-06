import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";

@Component({
  selector: 'app-integrations',
  standalone: true,
    imports: [
        AnimateComponentDirective
    ],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {

}
