import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { Device } from '../model/device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})

export class DeviceListComponent implements OnInit {
  displayedColumns: string[] = ['deviceId', 'deviceType', 'deviceNumber', 'hostName', 'domainName', 'adminState', 'more'];
  dataSource: DeviceDataSource;
  selectedDevice: Device;

  constructor(private deviceService : DeviceService) {
    this.dataSource = new DeviceDataSource(deviceService);

    deviceService.selectedDevice$.subscribe(
      device => {
        this.selectedDevice = device;//Object.assign({},device);
    });

    this.deviceService.hasUpdates$.subscribe(
      hasUpdate => {
        if(hasUpdate) this.refreshDevices();
    });
  }

  ngOnInit() {
  }

  selectDevice(device: Device) : void {
    this.deviceService.selectDevice(device.id);
  }

  deleteDevice(device: Device) : void {
    this.deviceService.deleteDevice(device.id).subscribe(() => {
      //this.refreshDevices();
    });
  }

  getDeviceDirectLink(device: Device) : void {
    console.log("/device/" + device.id);
  }

  refreshDevices() : void {
    this.dataSource = new DeviceDataSource(this.deviceService);
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
