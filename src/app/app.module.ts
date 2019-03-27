import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceDetailsComponent } from './device/device-details/device-details.component';
import { DeviceViewComponent } from './device/device-view/device-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DeviceViewComponent,
    DeviceListComponent,
    DeviceDetailsComponent,
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
