import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  long;
  wide;
  area;
  cv;
  constructor() { }

  ngOnInit() {
   
  }
  caculate() {
    this.area = this.long * this.wide;
    this.cv = (parseInt(this.long) + parseInt(this.wide)) *2;
  }

}
