import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { Device } from '../device/model/device';
import { DeviceService } from '../device/device.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private deviceCount: number;

  constructor(private deviceService : DeviceService, private titleService: Title) {
    this.deviceCount = 0;
    deviceService.getDevices().subscribe(devices => {
      this.deviceCount = +devices.length;
    });
  }

  ngOnInit() {
    this.titleService.setTitle("Dashboard | TRICOM");
  }

}
