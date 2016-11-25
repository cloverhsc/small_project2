import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep-status',
  templateUrl: './sleep-status.component.html',
  styleUrls: ['./sleep-status.component.css']
})
export class SleepStatusComponent implements OnInit {
    private sleepStatusTitle: string = '睡眠狀態';
    private count: number = 50;
  constructor() { }

  ngOnInit() {
  }

}
