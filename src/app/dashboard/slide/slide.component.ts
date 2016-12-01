import { Component, OnInit } from '@angular/core';

import { GetPhysiologicalInfoService }  from './get-physiological-info.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
    private userIDList: number[];
    private countUser: number;
    private errorMsg: string;
    constructor(
      private getInfo: GetPhysiologicalInfoService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.getInfo.getUserList().subscribe(
             (list) => {
                 this.userIDList = list.list;
             },
             (error) => this.errorMsg = error,
             () => {
                 /*
                    1. Get how many user we have
                    2. Set how many user we need to create userData object.
                 */
                 this.countUser = this.userIDList.length;
             }
        );
    }
}
