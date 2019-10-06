import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  listitems = [
    {
      id: 1,
      name: "Nước ngọt",
      price: 10000,
      amount: null,
      checked : false
    },
    {
      id: 2,
      name: "Cà phê đen",
      price: 12000,
      amount: null,
      checked : false
    },
    {
      id: 3,
      name: "Thuốc lá",
      price: 18000,
      amount: null,
      checked : false
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  Total() {
    let total = 0;
    for (let item of this.listitems) {
      if(item.checked)
      total += item.amount * item.price;
    }
    return total;
  }





}
