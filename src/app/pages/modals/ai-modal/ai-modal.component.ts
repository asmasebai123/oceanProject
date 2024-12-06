import {Component, ElementRef, Inject, Output, ViewChild} from '@angular/core';
import EventEmitter from "events";
import {FormsModule} from "@angular/forms";
import {MatDialogClose} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {SharedService} from "../../../services/shared.service";
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-ai-modal',
  standalone: true,
  imports: [
    AccordionModule,
    FormsModule,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './ai-modal.component.html',
  styleUrl: './ai-modal.component.scss'
})
export class AiModalComponent {
  @Output() popupClosed = new EventEmitter<any>();

  constructor(public dialogRef: DialogRef<any>, @Inject(DIALOG_DATA) public data: FormData, private sharedService: SharedService) {
  }

  cancel() {
    this.dialogRef.close();
  }

}
