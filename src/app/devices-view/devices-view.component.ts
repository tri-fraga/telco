import { Component, OnInit, ViewChild, Output, EventEmitter   } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.css']
})

export class DevicesViewComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'more'];
  dataSource: MatTableDataSource<Device>;
  devices: Device[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private deviceService : DeviceService) { }

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
    this.deviceService.selectDevice(device);
  }

  deleteDevice(device: Device) : void {
    this.deviceService.deleteDevice(device);
  }

}
