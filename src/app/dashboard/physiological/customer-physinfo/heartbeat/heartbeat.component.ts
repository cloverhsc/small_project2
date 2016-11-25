import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.css']
})
export class HeartbeatComponent implements OnInit {
    private heartbeatTitle: string = '心跳';
    private count: number = 200;
  constructor() { }

  ngOnInit() {
  }

}
