import {Component, ElementRef, Inject, Output, ViewChild} from '@angular/core';
import EventEmitter from "events";
import {FormsModule} from "@angular/forms";
import {MatDialogClose} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

export interface FormData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  enterprise?: string;
  post?: string;
  canceled?: boolean
}
@Component({
  selector: 'app-demo-modal',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogClose,
    MatButton
  ],
  providers:[],
  templateUrl: './demo-modal.component.html',
  styleUrl: './demo-modal.component.scss'
})
export class DemoModalComponent {
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() popupClosed = new EventEmitter<any>();

  constructor(public dialogRef: DialogRef<FormData>,
              @Inject(DIALOG_DATA) public data: FormData,) {
    this.data.firstName = '';
    this.data.lastName = '';
    this.data.phoneNumber = '';
    this.data.enterprise = '';
    this.data.post = '';
    this.data.email = '';
    this.data.canceled = false;
  }

  cancel() {
    this.data.canceled=true;
    this.dialogRef.close(this.data)
  }
}
