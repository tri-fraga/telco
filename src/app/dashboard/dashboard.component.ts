import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { Device } from '../device/model/device';
import { DeviceService } from '../device/device.service';

import { Location } from '../location/model/location';
import { LocationService } from '../location/location.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public deviceCount: number;
  public locationCount: number;

  constructor(
    private titleService: Title,
    private deviceService : DeviceService,
    private locationService : LocationService
  ) {
    this.deviceCount = 0;
    deviceService.getDevices().subscribe(devices => {
      this.deviceCount = +devices.length;
    });
    locationService.getLocations().subscribe(locations => {
      this.locationCount = +locations.length;
    });
  }

  ngOnInit() {
    this.titleService.setTitle("Dashboard | TRICOM");
  }

}
