import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../service/cart.service';
import { product } from '../models/products'; 
import { Location } from '@angular/common'
import { products } from '../models/product';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})

export class DetailProductComponent implements OnInit {
  
  product;
  constructor(private route : ActivatedRoute, private location : Location, private cartService : CartService) { }
  back() {
    this.location.back();
  }
  addtoCart(product) {
    window.alert('Ur product has been add to Cart!!!');
    this.cartService.addToCart(product);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'))
      this.product = product.filter(product => {
        return product.id === id
      })[0];
    });
  }

}
