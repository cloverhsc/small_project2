import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glycemia',
  templateUrl: './glycemia.component.html',
  styleUrls: ['./glycemia.component.css']
})
export class GlycemiaComponent implements OnInit {
    private glycemiaTitle: string = '血糖值 mg/dl';
    @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
