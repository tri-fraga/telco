import { Component, OnInit } from '@angular/core';

import { Device } from '../model/device';
import { IPVersion } from '../model/iPVersion';
import { AdministrativeState } from '../model/administrativeState';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})

export class DeviceDetailsComponent implements OnInit {

  public device: Device;
  public inputEnabled: boolean;

  constructor(private deviceService : DeviceService) {
    this.inputEnabled = false;
    deviceService.selectedDevice$.subscribe(
      device => this.setDevice(device));
  }

  ngOnInit() {
  }

  IPVersionKeys() : string[] {
    return Object.keys(IPVersion);
  }

  AdminStateKeys() : string[] {
    return Object.keys(AdministrativeState);
  }

  getInputEnabled() : any {
    return (this.device && this.inputEnabled) ? null : true;
  }

  setDevice(device: Device) : void {
    this.device = device;
    this.inputEnabled = true;
  }

  clearDevice() : void {
    this.deviceService.unselectDevice();
    this.inputEnabled = false;
  }

  saveDevice() : void {
    this.deviceService.updateDevice(this.device).subscribe(() => {
      this.clearDevice();
    });
  }

}
