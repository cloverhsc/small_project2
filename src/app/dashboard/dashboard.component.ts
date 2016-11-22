import {
    Component, OnInit, OnDestroy, HostListener
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() {
      window.onbeforeunload = () => 'Close dashboard page.';
  }

  ngOnInit() {
      console.log('Enter dashboard page !');
  }

  ngOnDestroy() {
      alert('leave dashboard page.');
  }

  // @HostListener('window:onbeforeunload', ['$event']) onBeforeUnload (event) {
  //      return 'bye';
  // }
}
