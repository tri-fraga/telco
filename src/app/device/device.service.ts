import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
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
      tap(_ => this.log(`fetched device id ${id}`)),
      catchError(this.handleError<Device>(`getDevice id=${id}`))
    );
  }

  public addDevice(device: Device) : Observable<Device> {
    return this.http.post<Device>(this.deviceUrl, device, this.httpOptions).pipe(
      tap((newDevice: Device) => {
        this.log(`Added device ${newDevice.deviceId} (${newDevice.id})`);
        this.messageService.show('Added Device');
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<Device>('addDevice'))
    );
  }

  public updateDevice(device: Device): Observable<Device> {
    return this.http.put(this.deviceUrl, device, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Updated device ${device.deviceId} (${device.id})`);
        this.messageService.show("Updated Device");
        this.hasUpdatesSource.next(true);
      }),
      catchError(this.handleError<any>('updateDevice'))
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
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
