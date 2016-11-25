import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uric-acid',
  templateUrl: './uric-acid.component.html',
  styleUrls: ['./uric-acid.component.css']
})
export class UricAcidComponent implements OnInit {
    private uricAcidTitle: string = '尿酸值 mg/dL';
    private count: number = 6.5;
  constructor() { }

  ngOnInit() {
  }

}
