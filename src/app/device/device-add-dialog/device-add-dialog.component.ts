import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AdministrativeState } from '../model/administrativeState';
import { Device } from '../model/device';

@Component({
  selector: 'app-device-add-dialog',
  templateUrl: './device-add-dialog.component.html',
  styleUrls: ['./device-add-dialog.component.scss']
})

export class DeviceAddDialogComponent implements OnInit {

  device: Device;
  //@Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor(public dialogRef: MatDialogRef<DeviceAddDialogComponent>) { }

  ngOnInit() {
    this.device = new Device();
    this.device.adminState = AdministrativeState.Unlocked;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  AdminStateKeys(): string[] {
    return Object.keys(AdministrativeState);
  }

}
