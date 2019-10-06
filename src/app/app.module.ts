import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { DataService } from './Lap01/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ProductsComponent } from './Lap01/products/products.component';
import { DetailProductComponent } from './Lap01/detail-product/detail-product.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { Ex1Component } from './Lap01/ex1/ex1.component';
import { Ex2Component } from './Lap01/ex2/ex2.component';
import { Ex4Component } from './Lap01/ex4/ex4.component';
import { EmployeeService } from './Lap01/service/employee.service';
import { Ex5Component } from './Lap01/ex5/ex5.component';
import { Ex3Service } from './Lap01/service/ex3.service';
import { CartComponent } from './Lap01/cart/cart.component';
import { ListComponent } from './Lap01/list/list.component';
import { StudentComponent } from './Lap02/student/student.component';
import { StudentDetailComponent } from './Lap02/student-detail/student-detail.component';
import { SquareComponent } from './Lap03/square/square.component';
import { StudentComponent2 } from './Lap03/student/student.component';
import { NewyearComponent } from './Lap03/newyear/newyear.component';
import { CoffeeComponent } from './Lap03/coffee/coffee.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailProductComponent,
    NavComponent,
    Ex1Component,
    Ex2Component,
    Ex4Component,
    Ex5Component,
    CartComponent,
    ListComponent,
    StudentComponent,
    StudentDetailComponent,
    SquareComponent,
    StudentComponent2,
    NewyearComponent,
    CoffeeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    RatingModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [DataService , EmployeeService, Ex3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
