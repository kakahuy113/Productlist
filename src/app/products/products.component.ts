import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isEdit = true;
  searchText;
  listofProduct = [
    {
      product : 'Leaf Rake',
      code : 'GDN-0011',
      available : 'Mar 14,2016',
      Price : '18.95',
      rating : 3.2,
      urlImage: "../assets/images/leaf-rake.jpg"
    },
    {
      product : 'Garden Cart',
      code : 'GDN-0011',
      available : 'Mar 14,2016',
      Price : '18.95',
      rating : 3.2,
      urlImage: "../assets/images/garden-cart.jpg"
    },
    {
      product : 'Hammer',
      code : 'GDN-0011',
      available : 'Mar 14,2016',
      Price : '18.95',
      rating : 3.2,
      urlImage: "../assets/images/hammer.jpg"
    },
    {
      product : 'Saw',
      code : 'GDN-0011',
      available : 'Mar 14,2016',
      Price : '18.95',
      rating : 3.2,
      urlImage: "../assets/images/saw.jpg"
    },
    {
      product : 'Video game controler',
      code : 'GDN-0011',
      available : 'Mar 14,2016',
      Price : '18.95',
      rating : 3.2,
      urlImage: "../assets/images/video-game-controller.jpg"
    },



  ];
  constructor() { }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  ngOnInit() {
  }

}
