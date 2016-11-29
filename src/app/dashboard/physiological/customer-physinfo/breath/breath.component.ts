import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.css']
})
export class BreathComponent implements OnInit {
    private breathTitle: string = '呼吸次數/m';
    @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}
