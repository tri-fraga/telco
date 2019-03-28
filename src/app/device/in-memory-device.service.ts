import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Device } from './model/device';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDeviceService implements InMemoryDbService {
  createDb() {
    const devices = [
      {id: 1, deviceId: "1", deviceType: 'Hydrogen', deviceNumber: 1.0079, hostName: 'H'},
      {id: 2, deviceId: "2", deviceType: 'Helium', deviceNumber: 4.0026, hostName: 'He'},
      {id: 3, deviceId: "3", deviceType: 'Lithium', deviceNumber: 6.941, hostName: 'Li'},
      {id: 4, deviceId: "4", deviceType: 'Beryllium', deviceNumber: 9.0122, hostName: 'Be'},
      {id: 5, deviceId: "5", deviceType: 'Boron', deviceNumber: 10.811, hostName: 'B'},
      {id: 6, deviceId: "6", deviceType: 'Carbon', deviceNumber: 12.0107, hostName: 'C'},
      {id: 7, deviceId: "7", deviceType: 'Nitrogen', deviceNumber: 14.0067, hostName: 'N'},
      {id: 8, deviceId: "8", deviceType: 'Oxygen', deviceNumber: 15.9994, hostName: 'O'},
      {id: 9, deviceId: "9", deviceType: 'Fluorine', deviceNumber: 18.9984, hostName: 'F'},
      {id: 10, deviceId: "10", deviceType: 'Neon', deviceNumber: 20.1797, hostName: 'Ne'},
      {id: 11, deviceId: "11", deviceType: 'Soldium', deviceNumber: 1.0079, hostName: 'Na'},
      {id: 12, deviceId: "12", deviceType: 'Magnesium', deviceNumber: 4.0026, hostName: 'Mg'},
      {id: 13, deviceId: "13", deviceType: 'Aluminium', deviceNumber: 6.941, hostName: 'Al'},
      {id: 14, deviceId: "14", deviceType: 'Silicon', deviceNumber: 9.0122, hostName: 'Si'},
      {id: 15, deviceId: "15", deviceType: 'Phosphorous', deviceNumber: 10.811, hostName: 'P'},
    ];
    return {devices};
  }

  genId(devices: Device[]): number {
    return devices.length > 0 ? Math.max(...devices.map(device => device.id)) + 1 : 11;
  }
}
