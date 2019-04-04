import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService,
    private bottomSheetRef: MatBottomSheetRef<MessagesComponent>) {

  }

  clearMessages(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    this.messageService.clear();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
