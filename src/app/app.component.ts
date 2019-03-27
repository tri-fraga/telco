import { Component } from '@angular/core';
import { MatSnackBar, MatBottomSheet } from '@angular/material';

import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TRICOM';
  debug = true;
  constructor(private messageService: MessageService, private snackBar: MatSnackBar, private bottomSheet: MatBottomSheet) {

    messageService.snackMessage$.subscribe(
      message => {
        this.showSnackbar(message);
    });

  }

  showSnackbar(message : string) : void {
    let snackBarRef = this.snackBar.open(message, "Dismiss", {
      duration: 3000
    });
  }

  showMessages() : void {
    this.bottomSheet.open(MessagesComponent);
  }
}
