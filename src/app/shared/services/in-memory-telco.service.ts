import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Device } from '../../device/model/device';
import { Location } from '../../location/model/location';

@Injectable({
  providedIn: 'root'
})

export class InMemoryTelcoService implements InMemoryDbService {
  createDb() {
    const devices = [
      {id: 1, deviceId: 'T-AA1', deviceType: 'cisco12416', deviceNumber: 111111, hostName: 'TOS-CAA1', domainName: 'TOS.TESTING.TRI.COM', adminState: 'Unlocked', ipVersionActivated: 'IPv4', ipVersionSupported: 'IPv4', routerCode: 2492, qoS: true, locationId:'', comment:'Testing'},
      {id: 2, deviceId: 'T-AX2', deviceType: 'cisco12416', deviceNumber: 111112, hostName: 'TOS-CAX2', domainName: 'TOS.TESTING.TRI.COM', adminState: 'Locked', ipVersionActivated: 'IPv4', ipVersionSupported: 'IPv4', routerCode: 2492, qoS: true, locationId:'T-VIE', comment:'Testing'},
      {id: 3, deviceId: 'T-BB3', deviceType: 'JuniperMX960', deviceNumber: 311111, hostName: 'TOS-JBB3', domainName: 'TOS.TESTING.TRI.COM', adminState: 'Unlocked', ipVersionActivated: 'IPv6', ipVersionSupported: 'IPv6', routerCode: 2492, qoS: true, locationId:'T-VIE', comment:'Testing'},
      {id: 4, deviceId: 'T-CA4', deviceType: 'cisco12416', deviceNumber: 111113, hostName: 'TOS-CCA4', domainName: 'TOS.TESTING.TRI.DE', adminState: 'OutOfService', ipVersionActivated: 'IPv4', ipVersionSupported: 'IPv4', routerCode: 2492, qoS: true, locationId:'', comment:'Testing'},
      {id: 5, deviceId: 'T-MM5', deviceType: 'JuniperM320', deviceNumber: 211111, hostName: 'TOS-JMM5', domainName: 'TOS.TESTING.TRI.DE', adminState: 'Unlocked', ipVersionActivated: 'IPv6', ipVersionSupported: 'IPv6', routerCode: 2492, qoS: false, locationId:'T-DUS', comment:'Testing'},
      {id: 6, deviceId: 'T-SO6', deviceType: 'cisco12416', deviceNumber: 111114, hostName: 'TOS-CSO6', domainName: 'TOS.PROD.TRI.COM', adminState: 'Unlocked', ipVersionActivated: 'IPv4', ipVersionSupported: 'IPv4', routerCode: 2492, qoS: true, locationId:'T-VIE', comment:'Testing'},
      {id: 7, deviceId: 'X-XX7', deviceType: 'cisco12416', deviceNumber: 111115, hostName: 'TOS-CXX7', domainName: 'TOS.PROD.TRI.COM', adminState: 'Unlocked', ipVersionActivated: 'IPv4', ipVersionSupported: 'IPv4', routerCode: 2492, qoS: true, locationId:'T-VIE', comment:''},
      {id: 8, deviceId: 'Z-ZA8', deviceType: 'JuniperM320', deviceNumber: 211112, hostName: 'TOS-JZA8', domainName: 'TOS.TESTING.TRI.COM', adminState: 'Locked', ipVersionActivated: 'IPv4', ipVersionSupported: 'IPv6', routerCode: 2492, qoS: false, locationId:'T-VIE', comment:''},
      {id: 9, deviceId: 'T-AA9', deviceType: 'JuniperM320', deviceNumber: 211113, hostName: 'TOS-JAA9', domainName: 'TOS.TESTING.TRI.COM', adminState: 'Unknown', ipVersionActivated: 'IPv6', ipVersionSupported: 'IPv6', routerCode: 2492, qoS: false, locationId:'T-LA', comment:''},

    ];

    const locations = [
      {id: 1, locationId: 'T-VIE', address: 'Leonard-Bernstein Strasse 10, 1220 Wien', contactPhone: "+43664888333700", comment: ''},
      {id: 2, locationId: 'T-DUS', address: 'Street 1, 40210 Dusseldorf', contactPhone: "+43664888333700", comment: ''},
      {id: 3, locationId: 'TRI-VIE-01', address: 'Leonard-Bernstein Strasse 10, 1220 Wien', contactPhone: "+43664888333700", comment: 'Test'},
      {id: 4, locationId: 'TRI-VIE-05', address: 'Leonard-Bernstein Strasse 10, 1220 Wien', contactPhone: "+43664888333700", comment: ''},
      {id: 5, locationId: 'TRI-VIE-23', address: 'Leonard-Bernstein Strasse 10, 1220 Wien', contactPhone: "+43664888333700", comment: ''},
      {id: 6, locationId: 'TRI-VIE-04', address: 'Leonard-Bernstein Strasse 10, 1220 Wien', contactPhone: "+43664888333700", comment: ''},

    ];
    return {devices, locations};
  }

  genId(list: any[]): number {
    return list.length > 0 ? Math.max(...list.map(list => list.id)) + 1 : 11;
  }
}
