import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";
import {DemoModalComponent} from "../../modals/demo-modal/demo-modal.component";
import {FormData} from "../demo/demo.component";
import {Dialog} from '@angular/cdk/dialog';
import {AiModalComponent} from "../../modals/ai-modal/ai-modal.component";
import {SharedService} from "../../../services/shared.service";


@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [AnimateComponentDirective],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AiComponent {

  constructor(private dialog: Dialog, private sharedData : SharedService) {}

  show() {
      const dialogRef = this.dialog.open<any>(AiModalComponent, {
        width: '500px'
      });
      this.sharedData.isScrolled = true;

      dialogRef.closed.subscribe(res =>{
        this.sharedData.isScrolled = false;
      })
  }

}
