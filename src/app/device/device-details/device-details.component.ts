import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})

export class DeviceDetailsComponent implements OnInit {
	device: Device;

  constructor(private deviceService : DeviceService) {
    //this.device = new Device();
    deviceService.selectedDevice$.subscribe(
      device => {
        this.device = device;
    });
  }

  ngOnInit() {

  }

  clearDevice() : void {
    this.deviceService.unselectDevice();
  }

  saveDevice() : void {
    this.deviceService.updateDevice(this.device);
  }

}
