import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { DevicesModelComponent } from './devices-model/devices-model.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesViewComponent,
    DevicesModelComponent,
    MessagesComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessagesComponent]
})
export class AppModule { }
