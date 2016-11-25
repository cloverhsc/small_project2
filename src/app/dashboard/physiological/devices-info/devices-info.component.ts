import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-info',
  templateUrl: './devices-info.component.html',
  styleUrls: ['./devices-info.component.css']
})
export class DevicesInfoComponent implements OnInit {
    private wristband: string = '手環電量';
    private mattress: string = '床墊運作';
  constructor() { }

  ngOnInit() {
  }

}
