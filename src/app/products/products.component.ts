import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isEdit = true;
  searchText;
  listofProduct: any = [];
  constructor(private data : DataService) { }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  ngOnInit() {
    this.data.getdata().subscribe(
      data => this.listofProduct = data)
    
    };

}
