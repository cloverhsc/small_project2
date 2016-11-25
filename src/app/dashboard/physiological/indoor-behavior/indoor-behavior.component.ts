import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor-behavior',
  templateUrl: './indoor-behavior.component.html',
  styleUrls: ['./indoor-behavior.component.css']
})
export class IndoorBehaviorComponent implements OnInit {
    public isLeave: boolean = false;
    public countLeave: number = 400000;
    public isCalling: boolean = false;
    public countCall: number = 500000;
    public leaveTitle: string = '離開';
    public countLeaveTitle: string = '離開次數';
    public isCallingTitle: string = '呼叫';
    public countCallTitle: string = '呼叫次數';
  constructor() { }

  ngOnInit() {
  }

}
