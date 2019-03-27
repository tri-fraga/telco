import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

import { MessageService } from '../message.service';
import { Device } from './device';
import { DEVICES } from './devices-mock';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private selectedDeviceSource = new Subject<Device>();
  selectedDevice$ = this.selectedDeviceSource.asObservable();
  selectedDevice: Device;

  constructor(private messageService: MessageService) { }

  getDevices(): Observable<Device[]> {
    this.messageService.add('DeviceService: fetched device list');
    return of(DEVICES);
  }

  selectDevice(device: Device) : void {
    this.selectedDevice = device;
    this.selectedDeviceSource.next(this.selectedDevice);
    this.messageService.add('DeviceService: selected device ' + this.selectedDevice.name);
  }

  unselectDevice() : void {
    this.selectedDevice = new Device();
    this.selectedDeviceSource.next(this.selectedDevice);
  }

  saveDevice(device: Device) : void {
    this.messageService.show("Saved");
    this.messageService.add('DeviceService: saved device ' + device.name);
    //TODO: Implement
  }

  deleteDevice(device: Device) : void {
    this.messageService.add('DeviceService: deleted device ' + device.name);
    //TODO: Implement
  }
}
