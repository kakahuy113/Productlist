import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex4Component } from './ex4/ex4.component';
import { EmployeeService } from './service/employee.service';
import { Ex5Component } from './ex5/ex5.component';
import { Ex3Service } from './service/ex3.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailProductComponent,
    NavComponent,
    Ex1Component,
    Ex2Component,
    Ex4Component,
    Ex5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    RatingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService , EmployeeService, Ex3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
