import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private eventSubject = new Subject<any>();

  isScrolled : boolean = false;

  showLandingPage : boolean = false;

  // Observable to subscribe to events
  event$ = this.eventSubject.asObservable();


  // Method to send an event
  sendEvent(event: any) {
    this.eventSubject.next(event);
  }
}
