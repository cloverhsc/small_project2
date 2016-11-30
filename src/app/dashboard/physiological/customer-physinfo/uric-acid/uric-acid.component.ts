import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uric-acid',
  templateUrl: './uric-acid.component.html',
  styleUrls: ['./uric-acid.component.css']
})
export class UricAcidComponent implements OnInit {
    private uricAcidTitle: string = '尿酸值 mg/dL';
    @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
