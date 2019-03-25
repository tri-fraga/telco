import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { DevicesModelComponent } from './devices-model/devices-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesViewComponent,
    DevicesModelComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
