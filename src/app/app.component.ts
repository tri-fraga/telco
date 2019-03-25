import { Component } from '@angular/core';
import { Device } from './device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Telecom';
  selectedDevice: Device;

  setDevice(device: Device): void {
    this.selectedDevice = device;
    console.log('Device selected ' + device.name);
  }

  deleteDevice(device: Device): void {
    console.log('Device deleted ' + device.name);
    //return false;
  }
}
