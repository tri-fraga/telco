import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { Device } from '../device/model/device';
import { DeviceService } from '../device/device.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private deviceService : DeviceService,
    private titleService: Title
  )
  {}

  ngOnInit() {
    this.titleService.setTitle("Dashboard | TRICOM");
  }

}
