import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Device } from '../device';

@Component({
  selector: 'app-device-add-dialog',
  templateUrl: './device-add-dialog.component.html',
  styleUrls: ['./device-add-dialog.component.css']
})

export class DeviceAddDialogComponent implements OnInit {

  device: Device;
  //@Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor(public dialogRef: MatDialogRef<DeviceAddDialogComponent>) { }

  ngOnInit() {
    this.device = new Device();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
