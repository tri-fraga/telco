import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LocationEditDialogComponent } from '../location-edit-dialog/location-edit-dialog.component';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

import { Location } from '../model/location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})

export class LocationListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'locationId', 'address', 'contactPhone', 'comment', 'actions'];
  dataSource: LocationDataSource;

  constructor(private locationService : LocationService, private dialog : MatDialog) {
    this.dataSource = new LocationDataSource(locationService);

    this.locationService.hasUpdates$.subscribe(
      hasUpdate => {
        if(hasUpdate) this.refreshLocations();
    });
  }

  ngOnInit() {
  }

  refreshLocations() : void {
    this.dataSource = new LocationDataSource(this.locationService);
  }

  editLocation(selectedLocation: Location) : void {
    this.locationService.getLocation(selectedLocation.id).subscribe(location => {
      const dialogRef = this.dialog.open(LocationEditDialogComponent, {
        width: '400px',
        data: {
          location: location
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result != null) {
          this.locationService.updateLocation(result).subscribe();
        }
      });
    });
  }

  deleteLocation(location: Location) : void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: "Do you want to delete this location?",
        positive: "Yes",
        negative: "No"
      }
    }).afterClosed().subscribe(close => {
      if(close) {
        this.locationService.deleteLocation(location.id).subscribe();
      }
    });
  }

}

export class LocationDataSource extends DataSource<any> {
  constructor(private locationService : LocationService) {
    super();
  }
  connect(): Observable<Location[]> {
    return this.locationService.getLocations();
  }
  disconnect() {}
}
