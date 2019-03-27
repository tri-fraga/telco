import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DevicesViewComponent } from './device/devices-view/devices-view.component';
import { DeviceDetailsComponent } from './device/device-details/device-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DevicesViewComponent,
    DeviceDetailsComponent,
    MessagesComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessagesComponent]
})
export class AppModule { }
