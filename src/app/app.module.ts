import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceViewComponent } from './device/device-view/device-view.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceDetailsComponent } from './device/device-details/device-details.component';
import { DeviceAddDialogComponent } from './device/device-add-dialog/device-add-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    DeviceViewComponent,
    DeviceListComponent,
    DeviceDetailsComponent,
    DeviceAddDialogComponent,
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MessagesComponent,
    DeviceAddDialogComponent
  ]
})
export class AppModule { }
