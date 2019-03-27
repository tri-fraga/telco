import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

import { MessageService } from '../message.service';
import { Device } from './model/device';
import { DEVICES } from './devices-mock';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private selectedDeviceSource = new Subject<Device>();
  selectedDevice$ = this.selectedDeviceSource.asObservable();
  selectedDevice: Device;

  constructor(private messageService: MessageService) {
    this.unselectDevice();
  }

  getDevices(): Observable<Device[]> {
    this.messageService.add('DeviceService: fetched device list');
    return of(DEVICES);
  }

  getDeviceCount() : number {
    return 22;
  }

  getDevice(id: number) : Observable<Device> {
    var device = of(DEVICES.find(device => device.deviceId === id));
    this.messageService.add(`DeviceService: fetched device id=${id}`);
    return device;
  }

  selectDeviceById(id: number) : void {
    if(!id) {
      this.unselectDevice();
      return;
    }
    this.getDevice(id)
      .subscribe(device => this.selectDevice(device));
  }

  selectDevice(device: Device) : void {
    if(!device) {
      this.unselectDevice();
      return;
    }
    this.selectedDevice = device;
    this.selectedDeviceSource.next(this.selectedDevice);
    this.messageService.add('DeviceService: selected device ' + this.selectedDevice.deviceId);
  }

  unselectDevice() : void {
    this.selectedDevice = new Device();
    this.selectedDeviceSource.next(this.selectedDevice);
  }

  addDevice(device: Device) : void {
    this.messageService.show("Added Device");
    this.messageService.add('DeviceService: added device ' + device.deviceId);
  }

  updateDevice(device: Device) : void {
    this.messageService.show("Updated");
    this.messageService.add('DeviceService: updated device ' + device.deviceId);
    //TODO: Implement
  }

  deleteDevice(device: Device) : void {
    this.messageService.add('DeviceService: deleted device ' + device.deviceId);
    //TODO: Implement
  }
}
