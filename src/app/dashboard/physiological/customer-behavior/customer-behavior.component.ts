import { Component, OnInit, Input } from '@angular/core';

import {Physiological} from '../../slide/physiological';

@Component({
  selector: 'app-customer-behavior',
  templateUrl: './customer-behavior.component.html',
  styleUrls: ['./customer-behavior.component.css']
})
export class CustomerBehaviorComponent implements OnInit, Input {
    private title: string = '運動步數';
    @Input() myPhyData: Physiological;
    // public count: number = 1775;
  constructor() { }

  ngOnInit() {
  }

}
