import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit, AfterViewInit {
  @Input()
  percent: number;
  @Input()
  circleIdent: string;

  circle: SVGCircleElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.circle = document.getElementById(this.circleIdent) as unknown as SVGCircleElement;

    const radius = this.circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    this.circle.style.strokeDasharray = `${circumference} ${circumference}`;
    this.circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - this.percent / 100 * circumference;
    this.circle.style.strokeDashoffset = offset.toString();
  }
}
