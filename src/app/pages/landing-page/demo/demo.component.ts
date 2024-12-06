import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {DemoModalComponent} from "../../modals/demo-modal/demo-modal.component";
import {Dialog} from '@angular/cdk/dialog';
import {FormsModule} from "@angular/forms";
import {MatTooltip} from "@angular/material/tooltip";
import {MatTooltipModule} from '@angular/material/tooltip';
import {AnimateComponentDirective} from "../../../animate-component-directive";
import {SharedService} from "../../../services/shared.service";
import { EmailDTO } from '../../../models/emailDTO';
import { EmailService } from '../../../services/email.service';
export interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  enterprise: string;
  post: string;
  canceled: boolean;
}

@Component({
  selector: 'app-demo',
  standalone: true,
    imports: [NgClass, FormsModule, NgIf, MatTooltip, MatTooltipModule, AnimateComponentDirective],
  providers:[],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent{
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  enterprise: string = '';
  post: string = '';
  emailPlaceHolder = "Votre adresse e-mail";
  email: string = '';

  validEmail: boolean = true;

  emailDto : EmailDTO = new EmailDTO();

  form : EmailDTO = new EmailDTO();

  constructor(private dialog: Dialog, private sharedService : SharedService, private emailService : EmailService) {}

  show() {
  
    if (this.email !== undefined && this.email.length>0) {
      this.sharedService.isScrolled = true;
      this.validEmail = true;
      this.emailDto.subject = "Demander un demo";
      this.emailDto.from = this.email;
      this.emailService.sendEmail(this.emailDto).subscribe(()=>{
        this.email = '';
        console.log('sent succesfully !');
      })
      // const dialogRef = this.dialog.open<FormData>(DemoModalComponent, {
      //   width: '700px',
      //   data: {
      //     firstName: this.firstName,
      //     lastName: this.lastName,
      //     phoneNumber: this.phoneNumber,
      //     enterprise: this.enterprise,
      //     post: this.post,
      //   }
      // });

      // dialogRef.closed.subscribe(result => {
      //   this.sharedService.isScrolled = false;
      //   this.form.lastName = result?.lastName;
      //   this.form.firstName = result?.firstName;
      //   this.form.phoneNumber = result?.phoneNumber;
      //   this.form.enterprise = result?.enterprise;
      //   this.form.post = result?.post;
      //   console.log('form', this.form)

      //   this.email = '';
      //   if (!result?.canceled){
      //     this.emailPlaceHolder = 'Merci ! votre demande est bien reçu!'
      //   }
      // });
    } else {
      this.validEmail = false;
    }
  }

  checkEmail($event:string) {
    if ($event.length>0){
      this.form.from = $event;
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }
}
