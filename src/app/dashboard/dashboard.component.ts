import {
    Component, OnInit, OnDestroy, HostListener
} from '@angular/core';


// get physiological service
import { GetPhysiologicalInfoService }  from './slide/get-physiological-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ GetPhysiologicalInfoService ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() {
    //   window.onbeforeunload = () => 'Close dashboard page.';
  }

  ngOnInit() {
      console.log('Enter dashboard page !');
  }

  ngOnDestroy() {
      alert('leave dashboard page.');
  }

}
