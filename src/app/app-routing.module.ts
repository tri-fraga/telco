import { NgModule }             from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DeviceViewComponent }  from './device/device-view/device-view.component';
import { LocationViewComponent }  from './location/location-view/location-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DeviceViewComponent },
  { path: 'devices/:id', component: DeviceViewComponent},
  { path: 'locations', component: LocationViewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
