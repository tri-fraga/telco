import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LocationService }  from '../location.service';
import { LocationListComponent } from '../location-list/location-list.component';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']
})
export class LocationViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog : MatDialog,
    private titleService: Title,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Locations | TRICOM");
  }

  openLocationAddDialog(): void {
    /*const dialogRef = this.dialog.open(LocationAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.locationService.addLocation(result).subscribe();
      }
    });*/
  }

}
