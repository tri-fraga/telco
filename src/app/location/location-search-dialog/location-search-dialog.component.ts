import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Location } from '../model/location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-search-dialog',
  templateUrl: './location-search-dialog.component.html',
  styleUrls: ['./location-search-dialog.component.scss']
})
export class LocationSearchDialogComponent implements OnInit {

  selectedLocation: Location;
  availableLocations: Location[];

  constructor(private locationService : LocationService, public dialogRef: MatDialogRef<LocationSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {
  }

  ngOnInit() {
    this.filterLocations('');
  }

  //TODO: Use Search WebService for filtering instead
  filterLocations(filter: string) : void {
    this.locationService.getLocations().subscribe(locations => {
      if (filter) {
        const filterValue = filter.toLowerCase();
        this.availableLocations = locations.filter(loc => loc.locationId.toLowerCase().startsWith(filterValue));
      } else {
        this.availableLocations = locations;
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
