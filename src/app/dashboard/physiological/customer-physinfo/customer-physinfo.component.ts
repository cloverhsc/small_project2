
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {Physiological} from '../../slide/physiological';
import {GetPhysiologicalInfoService} from '../../slide/get-physiological-info.service';

@Component({
  selector: 'app-customer-physinfo',
  templateUrl: './customer-physinfo.component.html',
  styleUrls: ['./customer-physinfo.component.css']
})
export class CustomerPhysinfoComponent implements OnInit, OnDestroy {
    @Input() userID: number;
    private userData: Physiological;
    private errorMsg: string;

    constructor(
        private getInfo: GetPhysiologicalInfoService
    ) { }

    ngOnInit() {
        this.getPhyInfo(this.userID);
    }

    ngOnDestroy() { }

    getPhyInfo( userID ) {
        this.getInfo.getUserPhyInfo(userID).subscribe(
            (data) => this.userData = data,
            (error) => this.errorMsg = error
        )
    }
}
