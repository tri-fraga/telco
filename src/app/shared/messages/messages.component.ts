import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService,
    private bottomSheetRef: MatBottomSheetRef<MessagesComponent>) {

  }

  hasMessages() : number {
    return this.messageService.getAll().length;
  }

  getMessages() : string[] {
    return this.messageService.getAll();
  }

  clearMessages(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    this.messageService.clear();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
