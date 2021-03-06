import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DeviceService }  from '../device.service';
import { DeviceListComponent } from '../device-list/device-list.component';
import { DeviceDetailsComponent } from '../device-details/device-details.component';
import { DeviceAddDialogComponent } from '../device-add-dialog/device-add-dialog.component';


@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})

export class DeviceViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog : MatDialog,
    private titleService: Title,
    private deviceService: DeviceService
  ) {}

  ngOnInit() {
    this.getDeviceByParam();
    this.titleService.setTitle("Devices | TRICOM");
  }

  getDeviceByParam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.deviceService.selectDevice(+id);
    }
  }

  openDeviceAddDialog(): void {
    const dialogRef = this.dialog.open(DeviceAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.deviceService.addDevice(result).subscribe();
      }
    });
  }

}
