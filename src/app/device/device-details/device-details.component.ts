import { Component, OnInit } from '@angular/core';

import { Device } from '../model/device';
import { IPVersion } from '../model/iPVersion';
import { AdministrativeState } from '../model/administrativeState';
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
        this.device = Object.assign({}, device);
    });
  }

  ngOnInit() {
  }

  IPVersionKeys() : string[] {
    return Object.keys(IPVersion);
  }

  AdminStateKeys() : string[] {
    return Object.keys(AdministrativeState);
  }

  clearDevice() : void {
    this.deviceService.unselectDevice();
  }

  saveDevice() : void {
    this.deviceService.updateDevice(this.device);
  }

}
