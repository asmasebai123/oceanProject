import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import {AnimateComponentDirective} from "../../../animate-component-directive";
@Component({
  selector: 'app-functionalities',
  standalone: true,
  imports: [
    SplitterModule,
    AnimateComponentDirective
  ],
  templateUrl: './functionalities.component.html',
  styleUrl: './functionalities.component.scss'
})
export class FunctionalitiesComponent {

}
