import { Component, OnInit, Input } from '@angular/core';

import {Physiological} from '../../slide/physiological';


@Component({
  selector: 'app-customer-physinfo',
  templateUrl: './customer-physinfo.component.html',
  styleUrls: ['./customer-physinfo.component.css']
})
export class CustomerPhysinfoComponent implements OnInit{
    @Input() myPhyData: Physiological;
    constructor( ) { }

    ngOnInit() {
    }
}
