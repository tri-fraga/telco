import { Component, OnInit } from '@angular/core';

import { Device } from '../device/device';
import { DeviceService } from '../device/device.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private deviceService : DeviceService) { }

  ngOnInit() {
  }

}
