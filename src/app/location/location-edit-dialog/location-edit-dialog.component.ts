import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Location } from '../model/location';

@Component({
  selector: 'app-location-edit-dialog',
  templateUrl: './location-edit-dialog.component.html',
  styleUrls: ['./location-edit-dialog.component.scss']
})
export class LocationEditDialogComponent implements OnInit {

  location: Location;

  constructor(public dialogRef: MatDialogRef<LocationEditDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.location = data.location;
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
