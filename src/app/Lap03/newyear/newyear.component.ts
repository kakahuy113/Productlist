import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newyear',
  templateUrl: './newyear.component.html',
  styleUrls: ['./newyear.component.css']
})
export class NewyearComponent implements OnInit {
  nv = {
    name : null, 
    salary : null,
    gender : null,
    rate : null
  }
  data = [
    { age : "25", rate:0.07},
    { age : "25 to 40" , rate: 0.1},
    { age : "above 40" , rate :0.15}
  ]
  constructor() { }

  ngOnInit() {
     
  }
  reward() {
    let i = this.nv.salary * this.nv.rate;
    if(this.nv.gender == "Nữ") {
      i += 200000;
    }
    return i;
  
    
  }
  
}
