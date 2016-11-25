import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-oxygen',
  templateUrl: './blood-oxygen.component.html',
  styleUrls: ['./blood-oxygen.component.css']
})
export class BloodOxygenComponent implements OnInit {
    private bloodOxygenTitle: string = '血氧值';
    private count: number = 90;
  constructor() { }

  ngOnInit() {
  }

}
