import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.css']
})
export class HeartbeatComponent implements OnInit {
    private heartbeatTitle: string = '心跳';
    @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
