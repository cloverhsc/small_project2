import { Component, OnInit, Input } from '@angular/core';

import {Physiological} from '../../slide/physiological';

@Component({
  selector: 'app-devices-info',
  templateUrl: './devices-info.component.html',
  styleUrls: ['./devices-info.component.css']
})
export class DevicesInfoComponent implements OnInit {
    @Input() myPhyData: Physiological;
    private wristband: string = '手環電量';
    private mattress: string = '床墊運作';

  constructor() { }

  ngOnInit() {
  }

}
