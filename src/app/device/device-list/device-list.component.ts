import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { LocationSearchDialogComponent } from '../../location/location-search-dialog/location-search-dialog.component';

import { Location } from '../../location/model/location';
import { Device } from '../model/device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})

export class DeviceListComponent implements OnInit {

  public displayedColumns: string[] = ['deviceId', 'deviceType', 'deviceNumber', 'hostName', 'domainName', 'adminState', 'locationId', 'actions'];
  public dataSource: DeviceDataSource;
  public selectedDevice: Device;

  constructor(private deviceService : DeviceService, private dialog : MatDialog) {
    this.dataSource = new DeviceDataSource(deviceService);

    deviceService.selectedDevice$.subscribe(
      device => {
        this.selectedDevice = device;
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

  assignDeviceToLocation(device: Device) : void {
    this.dialog.open(LocationSearchDialogComponent, {
      width: '400px',
      data: {
      }
    }).afterClosed().subscribe(location => {
      if(location) {
        this.deviceService.assignDeviceToLocation(device, location).subscribe();
      } else if (location === false) {
        this.deviceService.returnDeviceFromLocation(device).subscribe();
      }
    });
  }

  deleteDevice(device: Device) : void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: "Do you want to delete this device?",
        positive: "Yes",
        negative: "No"
      }
    }).afterClosed().subscribe(close => {
      if(close) {
        this.deviceService.deleteDevice(device.id).subscribe();
      }
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
