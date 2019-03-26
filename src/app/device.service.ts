import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Device } from './device';
import { DEVICES } from './devices-mock';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private messageService: MessageService) { }

  getDevices(): Observable<Device[]> {
    this.messageService.add('DeviceService: fetched device list');
    return of(DEVICES);
  }
}
