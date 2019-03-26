import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';



@Component({
  selector: 'app-devices-model',
  templateUrl: './devices-model.component.html',
  styleUrls: ['./devices-model.component.css']
})

export class DevicesModelComponent implements OnInit {
	@Input() device: Device;

  constructor() { }

  ngOnInit() {
  }

  clearDevice() {
    this.device = {
      position: null,
      name: '',
  		weight: null,
  		symbol: ''
    };
  }

  saveDevice() {

  }

}
