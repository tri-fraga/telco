import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTelcoService }  from './shared/services/in-memory-telco.service';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MessagesComponent } from './shared/messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceViewComponent } from './device/device-view/device-view.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceDetailsComponent } from './device/device-details/device-details.component';
import { DeviceAddDialogComponent } from './device/device-add-dialog/device-add-dialog.component';
import { LocationViewComponent } from './location/location-view/location-view.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationAddDialogComponent } from './location/location-add-dialog/location-add-dialog.component';
import { LocationAssignDialogComponent } from './location/location-assign-dialog/location-assign-dialog.component';
import { LocationEditDialogComponent } from './location/location-edit-dialog/location-edit-dialog.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    DeviceViewComponent,
    DeviceListComponent,
    DeviceDetailsComponent,
    DeviceAddDialogComponent,
    LocationViewComponent,
    LocationListComponent,
    LocationAddDialogComponent,
    LocationAssignDialogComponent,
    LocationEditDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryTelcoService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MessagesComponent,
    ConfirmationDialogComponent,
    DeviceAddDialogComponent,
    LocationAddDialogComponent,
    LocationEditDialogComponent
  ]
})
export class AppModule { }
