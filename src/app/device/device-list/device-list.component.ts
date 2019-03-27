import { Component, OnInit, ViewChild, EventEmitter   } from '@angular/core';
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
  dataSource: MatTableDataSource<Device>;
  devices: Device[];
  selectedDevice: Device;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private deviceService : DeviceService) {
    deviceService.selectedDevice$.subscribe(
      device => {
        this.selectedDevice = device;
    });
  }

  ngOnInit() {
    this.getDevices();
    this.dataSource = new MatTableDataSource<Device>(this.devices);
    this.dataSource.paginator = this.paginator;
  }

  getDevices() : void {
    this.deviceService.getDevices()
    .subscribe(devices => this.devices = devices);
  }

  selectDevice(device: Device) : void {
    this.selectedDevice = device;
    this.deviceService.selectDevice(this.selectedDevice);
  }

  deleteDevice(device: Device) : void {
    this.deviceService.deleteDevice(device);
  }

  getDeviceDirectLink(device: Device) : void {
    console.log("/device/" + device.position)
  }

}
