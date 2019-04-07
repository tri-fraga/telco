import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Location } from '../model/location';

@Component({
  selector: 'app-location-add-dialog',
  templateUrl: './location-add-dialog.component.html',
  styleUrls: ['./location-add-dialog.component.scss']
})
export class LocationAddDialogComponent implements OnInit {

  location: Location;
  //@Inject(MAT_DIALOG_DATA) public data: DialogData

  constructor(public dialogRef: MatDialogRef<LocationAddDialogComponent>) {
    this.location = new Location();
  }

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
