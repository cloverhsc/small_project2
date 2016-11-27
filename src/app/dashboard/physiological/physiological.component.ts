import { Component, OnInit } from '@angular/core';

import { GetPhysiologicalInfoService, myTest }  from './get-physiological-info.service';

@Component({
  selector: 'app-physiological',
  templateUrl: './physiological.component.html',
  styleUrls: ['./physiological.component.css']
})
export class PhysiologicalComponent implements OnInit {
    private userlist: myTest ;
    constructor(
        private getInfo: GetPhysiologicalInfoService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.getInfo.getUserList().subscribe(
             (list) => console.log(list),
             console.error
        );
    }
}
