import { Component, OnInit, Input } from '@angular/core';

import {Physiological} from '../../slide/physiological';

@Component({
  selector: 'app-indoor-behavior',
  templateUrl: './indoor-behavior.component.html',
  styleUrls: ['./indoor-behavior.component.css']
})
export class IndoorBehaviorComponent implements OnInit, Input {
    @Input() myPhyData: Physiological;
    public leaveTitle: string = '離開';
    public countLeaveTitle: string = '離開次數';
    public isCallingTitle: string = '呼叫';
    public countCallTitle: string = '呼叫次數';
  constructor() { }

  ngOnInit() {
  }

}
