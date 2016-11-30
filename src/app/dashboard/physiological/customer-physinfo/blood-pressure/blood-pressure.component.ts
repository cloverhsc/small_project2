import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit {
    private bloodPressure: string = '血壓';
    @Input() count: number;
    constructor() { }

    ngOnInit() {
    }

}
