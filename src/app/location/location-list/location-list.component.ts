import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

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

  constructor(private locationService : LocationService) {
    this.dataSource = new LocationDataSource(locationService);
  }

  ngOnInit() {
  }

  refreshDevices() : void {
    this.dataSource = new LocationDataSource(this.locationService);
  }

  editLocation(location: Location) : void {
  }

  deleteLocation(location: Location) : void {
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
