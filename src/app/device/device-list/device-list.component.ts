import { Component, OnInit, ViewChild, EventEmitter   } from '@angular/core';
import {  Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Device } from '../model/device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {
  displayedColumns: string[] = ['deviceId', 'deviceType', 'deviceNumber', 'hostName', 'domainName', 'adminState', 'more'];
  dataSource: DeviceDataSource;
  selectedDevice: Device;

  constructor(private deviceService : DeviceService) {
    this.dataSource = new DeviceDataSource(deviceService)
    deviceService.selectedDevice$.subscribe(
      device => {
        this.selectedDevice = device;
    });
  }

  ngOnInit() {
  }

  selectDevice(device: Device) : void {
    this.selectedDevice = device;
    this.deviceService.selectDevice(this.selectedDevice);
  }

  deleteDevice(device: Device) : void {
    this.deviceService.deleteDevice(device);
  }

  getDeviceDirectLink(device: Device) : void {
    console.log("/device/" + device.deviceId)
  }

}

export class DeviceDataSource extends DataSource<any> {
  constructor(private deviceService : DeviceService) {
    super();
  }
  connect(): Observable<Device[]> {
    return this.deviceService.getDevices();
  }
  disconnect() {}
}
