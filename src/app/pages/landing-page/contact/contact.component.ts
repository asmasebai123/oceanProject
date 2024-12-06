import { Component } from '@angular/core';
import {AnimateComponentDirective} from "../../../animate-component-directive";
import { EmailDTO } from '../../../models/emailDTO';
import { EmailService } from '../../../services/email.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        AnimateComponentDirective,
        FormsModule
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  emailDto : EmailDTO = new EmailDTO();

  constructor(private emailService : EmailService){}

sendEmail() {
  this.emailDto.subject = 'Contact'
  this.emailService.sendEmail(this.emailDto).subscribe(() => {console.log("send successfully")})
}

}
