import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { GetPhysiologicalInfoService }  from '../slide/get-physiological-info.service';
import { Physiological, PatientInfo }    from '../slide/physiological';
import { CustomerPhysinfoComponent }    from './customer-physinfo/customer-physinfo.component';

@Component({
  selector: 'app-physiological',
  templateUrl: './physiological.component.html',
  styleUrls: ['./physiological.component.css']
})
export class PhysiologicalComponent implements OnInit, OnDestroy {
    @Input() userID: number;
    @ViewChild( CustomerPhysinfoComponent)
    private phyComponent: CustomerPhysinfoComponent;
    private userData: PatientInfo;
    private errorMsg: string;
    public isClassVisible: boolean = false;
    private phyData: Physiological;
    constructor(
        private getInfo: GetPhysiologicalInfoService,
    ) { }

    ngOnInit() {
        this.getUserData(this.userID);
        // console.log(this.userID);
    }

    ngAfterViewInit() {
            this.phyData =  this.phyComponent.userData;
            console.log(this.phyData);
    }
    ngOnDestroy() {
    }

    getUserData( userID ) {
        this.getInfo.getUserInfo( userID ).subscribe(
            (data) => this.userData = data,
            (error) => this.errorMsg = error
            // () => this.getPhyData( userID )
        );
    }

    // getPhyData( userID ) {
    //     this.getInfo.getUserPhyInfo( userID ).subscribe(
    //         (data) => this.phyData = data,
    //         (error) => this.errorMsg = error,
    //     )
    // }
    showUserDetail( show: boolean ) {
        this.isClassVisible = show;
    }
}
