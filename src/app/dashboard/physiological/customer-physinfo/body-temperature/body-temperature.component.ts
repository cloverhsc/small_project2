import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-temperature',
  templateUrl: './body-temperature.component.html',
  styleUrls: ['./body-temperature.component.css']
})
export class BodyTemperatureComponent implements OnInit {
    private bodyTemperatureTitle: string = '體溫';
    @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
