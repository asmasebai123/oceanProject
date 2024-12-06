import { Component, EventEmitter, Output } from '@angular/core';
import { EmailDTO } from '../../../models/emailDTO';
import { EmailService } from '../../../services/email.service';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule,  MatTooltip],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  @Output() hideConnexionPage = new EventEmitter<any>();
  
  emailDto : EmailDTO = new EmailDTO();
  email: string = '';
  validEmail: boolean = true;

  constructor(private emailService : EmailService, private router: Router, private sharedService : SharedService ){}
login() {
  if (this.email !== undefined && this.email.length>0){
    this.validEmail = true;
    this.emailDto.subject = "Se connecter";
      this.emailDto.from = this.email;
      this.emailService.sendEmail(this.emailDto).subscribe(()=>{
        this.email = '';
        this.hideConnexionPage.emit();
      });
  } else{
    this.validEmail = false;
  }
}


checkEmail($event:string) {  
  if ($event.length>0){
    this.validEmail = true;
  } else {
    this.validEmail = false;
  }
}

}
