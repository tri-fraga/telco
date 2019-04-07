import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../shared/services/message.service';
import { Location } from './model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private locationUrl = 'api/locations';

  private hasUpdatesSource = new BehaviorSubject<boolean>(false);
  hasUpdates$ = this.hasUpdatesSource.asObservable();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  public getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl).pipe(
      tap(_ => this.log('Fetched locations')),
      catchError(this.handleError<Location[]>('getLocations', []))
    );
  }

  public getLocation(id: number) : Observable<Location> {
    const url = `${this.locationUrl}/${id}`;
    return this.http.get<Location>(url).pipe(
      tap(_ => this.log(`Fetched location id ${id}`)),
      catchError(this.handleError<Location>(`getLocation id=${id}`))
    );
  }

  public addLocation(location: Location) : Observable<Location> {
    return this.http.post<Location>(this.locationUrl, location, this.httpOptions).pipe(
      tap((newLocation: Location) => {
        this.log(`Added location ${newLocation.locationId} (${newLocation.id})`);
        this.messageService.show(`Added ${newLocation.locationId}`);
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<Location>('addLocation'))
    );
  }

  public updateLocation(location: Location): Observable<Location> {
    if(!location.id) {
      this.messageService.show("Could not update Location");
      this.log(`Update location ${location.locationId} failed - Id not set`);
      return;
    }

    return this.http.put(this.locationUrl, location, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Updated location ${location.locationId} (${location.id})`);
        this.messageService.show(`Updated ${newLocation.locationId}`);
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<any>('updateLocation'))
    );
  }

  public deleteLocation(location: Location | number) : Observable<Location> {
    const id = typeof location === 'number' ? location : location.id;
    const url = `${this.locationUrl}/${id}`;

    return this.http.delete<Location>(url, this.httpOptions).pipe(
      tap(_ => {
        this.log(`deleted location ${id}`);
        this.messageService.show("Deleted Location");
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<Location>('deleteLocation'))
    );
  }

  private log(message: string) {
    this.messageService.add(`LocationService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messageService.show(`${operation} failed`);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
