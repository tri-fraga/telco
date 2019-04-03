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

  private device: Device;
  private inputEnabled: boolean;

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

  enableInput() : void {
    this.inputEnabled = true;
  }

  disableInput() : void {
    this.inputEnabled = false;
  }

  setDevice(device: Device) : void {
    this.device = device;
    this.enableInput();
  }

  clearDevice() : void {
    this.deviceService.unselectDevice();
    this.disableInput();
  }

  saveDevice() : void {
    this.deviceService.updateDevice(this.device).subscribe(() => {
      this.clearDevice();
    });
  }

}
