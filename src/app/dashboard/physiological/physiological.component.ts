import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { GetPhysiologicalInfoService }  from '../slide/get-physiological-info.service';
import { Physiological }    from '../slide/physiological';

@Component({
  selector: 'app-physiological',
  templateUrl: './physiological.component.html',
  styleUrls: ['./physiological.component.css']
})
export class PhysiologicalComponent implements OnInit, OnDestroy {
    @Input() userID: number;
    private userData: Physiological;
    private errorMsg: string;
    public isClassVisible: boolean = false;
    constructor(
        private getInfo: GetPhysiologicalInfoService,
    ) { }

    ngOnInit() {
        this.getUserData(this.userID);
        // console.log(this.userID);
    }

    ngOnDestroy() {
    }

    getUserData( userID ) {
        this.getInfo.getUserInfo( userID ).subscribe(
            (data) => this.userData = data,
            (error) => this.errorMsg = error
        );
    }

    showUserDetail( show: boolean ) {
        this.isClassVisible = show;
    }
}
