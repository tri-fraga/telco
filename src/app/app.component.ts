import { Component } from '@angular/core';

import { Device } from './device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TRICOM';
  debug = true;
  constructor() {}
}
