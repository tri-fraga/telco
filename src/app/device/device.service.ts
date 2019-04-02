import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { Device } from './model/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private deviceUrl = 'api/devices';
  private selectedDeviceSource = new Subject<Device>();
  selectedDevice$ = this.selectedDeviceSource.asObservable();
  selectedDevice: Device;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    this.unselectDevice();
  }

  selectDeviceById(id: string) : void {
    if(!id) {
      this.unselectDevice();
      return;
    }
    this.getDevice(id)
      .subscribe(device => this.selectDevice(device));
  }

  selectDevice(device: Device) : void {
    if(!device) {
      this.unselectDevice();
      return;
    }
    this.selectedDevice = device;
    this.selectedDeviceSource.next(this.selectedDevice);
    this.log('selected device ' + this.selectedDevice.deviceId);
  }

  unselectDevice() : void {
    this.selectedDevice = null;
    this.selectedDeviceSource.next(this.selectedDevice);
  }

  getDeviceCount() : number {
    return 23;
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl).pipe(
      tap(_ => this.log('fetched devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  getDevice(id: string) : Observable<Device> {
    const url = `${this.deviceUrl}/${id}`;
    return this.http.get<Device>(url).pipe(
      tap(_ => this.log(`fetched device id ${id}`)),
      catchError(this.handleError<Device>(`getDevice id=${id}`))
    );
  }

  addDevice(device: Device) : void {
    this.messageService.show('Added Device');
    this.log('Added device ' + device.deviceId);
  }

  updateDevice(device: Device) : void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.put(this.deviceUrl, device, httpOptions).pipe(
      tap(_ => {
        this.log(`updated device ${device.deviceId}`);
        this.messageService.show("Updated Device")
      }),
      catchError(this.handleError<any>('updateDevice'))
    ).subscribe();
  }

  deleteDevice(device: Device) : void {
    this.log('Deleted device ' + device.deviceId);
    //TODO: Implement
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
