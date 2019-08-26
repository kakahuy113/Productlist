import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  name: string = 'Leaf Rake';
  code : string = 'GDN-0011';
  Description: string = 'Leaf rake with 48-inch wooden handle';
  availability: string = 'March 19,2016';
  Price : string = '$19.85';
  star: string = '3.2';
  constructor() { }

  ngOnInit() {
  }

}
