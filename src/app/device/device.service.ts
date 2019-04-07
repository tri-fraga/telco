import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../shared/services/message.service';
import { Device } from './model/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private deviceUrl = 'api/devices';

  private hasUpdatesSource = new BehaviorSubject<boolean>(false);
  hasUpdates$ = this.hasUpdatesSource.asObservable();

  private selectedDeviceSource = new Subject<Device>();
  selectedDevice$ = this.selectedDeviceSource.asObservable();

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    this.unselectDevice();
  }

  public selectDevice(device: Device | number) : void {
    if(!device) {
      this.unselectDevice();
      return;
    }

    const id = typeof device === 'number' ? device : device.id;

    this.getDevice(id).subscribe(newDevice => {
        this.selectedDeviceSource.next(newDevice);
        this.log(`Selected device ${newDevice.deviceId} (${newDevice.id})`);
    });
  }

  public unselectDevice() : void {
    this.selectedDeviceSource.next(new Device());
    this.log(`Unselected device`);
  }

  public getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl).pipe(
      tap(_ => this.log('Fetched devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  public getDevice(id: number) : Observable<Device> {
    const url = `${this.deviceUrl}/${id}`;
    return this.http.get<Device>(url).pipe(
      tap(_ => this.log(`Fetched Device id ${id}`)),
      catchError(this.handleError<Device>(`getDevice id=${id}`))
    );
  }

  public addDevice(device: Device) : Observable<Device> {
    return this.http.post<Device>(this.deviceUrl, device, this.httpOptions).pipe(
      tap((newDevice: Device) => {
        this.log(`Added device ${newDevice.deviceId} (${newDevice.id})`);
        this.messageService.show(`Added ${device.deviceId}`);
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<Device>('addDevice'))
    );
  }

  public updateDevice(device: Device): Observable<Device> {
    if(!device.id) {
      this.messageService.show("Could not update Device");
      this.log(`Update device ${device.deviceId} failed - Id not set`);
      return;
    }

    return this.http.put(this.deviceUrl, device, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Updated device ${device.deviceId} (${device.id})`);
        this.messageService.show(`Updated ${device.deviceId}`);
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<any>('updateDevice'))
    );
  }

  public assignDeviceToLocation(device: Device, location: Location) : Observable<Device> {
    device.locationId = location.locationId;
    return this.http.put(this.deviceUrl, device, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Assigned device ${device.deviceId} (${device.id}) to location ${location.locationId} (${location.id})`);
        this.messageService.show(`Assigned ${device.deviceId} to location ${location.locationId}`);
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<any>('assignDeviceToLocation'))
    );
  }

  public returnDeviceFromLocation(device: Device) : Observable<Device> {
    var locationId = device.locationId;
    device.locationId = null;

    if(!locationId) return null;

    return this.http.put(this.deviceUrl, device, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Returned device ${device.deviceId} (${device.id}) from location ${locationId}`);
        this.messageService.show(`Returned device ${device.deviceId} from location ${locationId}`);
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<any>('returnDeviceFromLocation'))
    );
  }

  public deleteDevice(device: Device | number) : Observable<Device> {
    const id = typeof device === 'number' ? device : device.id;
    const url = `${this.deviceUrl}/${id}`;

    return this.http.delete<Device>(url, this.httpOptions).pipe(
      tap(_ => {
        this.log(`deleted device ${id}`);
        this.messageService.show("Deleted Device");
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<Device>('deleteDevice'))
    );
  }

  private log(message: string) {
    this.messageService.add(`DeviceService: ${message}`);
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
