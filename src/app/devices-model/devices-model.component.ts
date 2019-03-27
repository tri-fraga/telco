import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devices-model',
  templateUrl: './devices-model.component.html',
  styleUrls: ['./devices-model.component.css']
})

export class DevicesModelComponent implements OnInit {
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
