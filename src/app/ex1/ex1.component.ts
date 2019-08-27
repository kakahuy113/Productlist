import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
  student = {     fullName:'Trần Gia Huy',     birthday:'20-01-1999',     gender :'Nam',     photo :'../assets/teo.jpg',     mark:8.5   } 
 
  constructor() { }

  ngOnInit() {
  }

}
