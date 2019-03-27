import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  snackMessage: string;
  private snackMessageSource = new Subject<string>();
  snackMessage$ = this.snackMessageSource.asObservable();

  add(message: string) : void {
    this.messages.unshift(this.getDate() + message);
  }
  
  show(message: string) : void {
    this.snackMessage = message;
    this.snackMessageSource.next(this.snackMessage);
  }

  clear() {
    this.messages = [];
  }

  getDate() : string {
    return new Date().toLocaleString("de-DE") + " ";
  }
}
