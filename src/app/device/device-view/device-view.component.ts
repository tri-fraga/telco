import { Component, OnInit } from '@angular/core';

import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from '.device-details/device-details.component';


@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
