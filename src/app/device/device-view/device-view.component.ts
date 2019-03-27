import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DeviceService }  from '../device.service';
import { DeviceListComponent } from '../device-list/device-list.component';
import { DeviceDetailsComponent } from '../device-details/device-details.component';
import { DeviceAddDialogComponent } from '../device-add-dialog/device-add-dialog.component';


@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})

export class DeviceViewComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService
  ) {}

  ngOnInit() {
    this.getDeviceByParam();
  }

  getDeviceByParam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deviceService.selectDeviceById(id);
  }

  openDeviceAddDialog(): void {
    const dialogRef = this.dialog.open(DeviceAddDialogComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.deviceService.addDevice(result);
      }
    });
  }

}
