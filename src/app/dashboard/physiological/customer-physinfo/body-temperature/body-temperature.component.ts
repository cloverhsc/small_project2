import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-temperature',
  templateUrl: './body-temperature.component.html',
  styleUrls: ['./body-temperature.component.css']
})
export class BodyTemperatureComponent implements OnInit {
    private bodyTemperatureTitle: string = '體溫';
    private count: number = 36.5;
  constructor() { }

  ngOnInit() {
  }

}
