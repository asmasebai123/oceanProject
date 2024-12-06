import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EmailDTO } from '../models/emailDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl = environment?.baseUrl;

  constructor(private httpClient: HttpClient) { }

  sendEmail(emailDto : EmailDTO) : Observable<any>{
    return this.httpClient.post('/api/send-email',emailDto).pipe();
  }


}
