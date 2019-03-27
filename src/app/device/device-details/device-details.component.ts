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
    deviceService.selectedDevice$.subscribe(
      device => {
        this.device = device;
    });
  }

  ngOnInit() {
    this.device = new Device();
  }

  clearDevice() : void {
    this.deviceService.unselectDevice();
  }

  saveDevice() : void {
    this.deviceService.saveDevice(this.device);
  }

}
