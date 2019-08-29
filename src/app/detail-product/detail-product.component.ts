import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  @Input() product;
 /*   name: string = 'Leaf Rake';
  code : string = 'GDN-0011';
  
  availability: string = 'March 19,2016';
  Price : string = '$19.85';
  star: string = '3.2';  */
  Description: string = 'Leaf rake with 48-inch wooden handle';
 
  constructor() { }

  ngOnInit() {
  }

}
