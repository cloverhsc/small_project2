import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-behavior',
  templateUrl: './customer-behavior.component.html',
  styleUrls: ['./customer-behavior.component.css']
})
export class CustomerBehaviorComponent implements OnInit {
    public title: string = '運動步數';
    public count: number = 1775;
  constructor() { }

  ngOnInit() {
  }

}
