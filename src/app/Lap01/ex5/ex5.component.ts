import { Component, OnInit } from '@angular/core';
import { Ex3Service } from '../service/ex3.service';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {
  products = [
    {
      id: 'pd100',
      image:"../../assets/images/saw.jpg",
      name: 'Laptop',
      price: 10100000,
    },
    {
      id: 'pd101',
      image:"../../assets/images/leaf-rake.jpg",
      name: "Mobile",
      price: 5900000
    },
    {
      id: 'pd102',
      image: '../../assets/images/hammer.jpg',
      name: 'Telivision',
      price: 15500000
    },
    {
      id: 'pd103',
      image: "../../assets/images/leaf-rake.jpg",
      name: 'Head Phone',
      price: 900000
    }
  ];
  constructor(private ex3 : Ex3Service) { }
  quantities={} ;
  ngOnInit() {
  /*   this.ex3.getdata().subscribe(
      data => this.products = data
    ); */
    this.products.forEach(product => {
      this.quantities[product.id] = 0
    });
  }

  onIncreaseQuantities(id) {
    let count = this.quantities[id];
    if (count < 20) {
    ++count;
    }
    this.quantities[id] = count;
  }
  onDecreaseQuantities(id) {
    let count = this.quantities[id];
    if (count > 0) {
    --count;
    }
    this.quantities[id] = count;
  }

  totalPrice() {
    let total = 0;
    for (let product of this.products) {
      total += product.price * this.quantities[product.id]
    }
    return total;
  }

}
