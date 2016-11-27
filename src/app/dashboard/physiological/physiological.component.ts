import { Component, OnInit } from '@angular/core';

import { GetPhysiologicalInfoService }  from './get-physiological-info.service';

@Component({
  selector: 'app-physiological',
  templateUrl: './physiological.component.html',
  styleUrls: ['./physiological.component.css']
})
export class PhysiologicalComponent implements OnInit {
    private userlist: any ;
    constructor(
        private getInfo: GetPhysiologicalInfoService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.getInfo.getUserList().subscribe(
            (data) => this.userlist = data
        );
        console.log(this.userlist);
    }
}
