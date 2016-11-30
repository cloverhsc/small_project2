import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blood-oxygen',
  templateUrl: './blood-oxygen.component.html',
  styleUrls: ['./blood-oxygen.component.css']
})
export class BloodOxygenComponent implements OnInit {
    private bloodOxygenTitle: string = '血氧值';
    @Input() count: number ;
  constructor() { }

  ngOnInit() {
  }

}
