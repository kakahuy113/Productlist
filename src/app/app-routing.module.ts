import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Lap01/products/products.component';
import { Ex1Component } from './Lap01/ex1/ex1.component';
import { Ex2Component } from './Lap01/ex2/ex2.component';
import { Ex4Component } from './Lap01/ex4/ex4.component';
import { Ex5Component } from './Lap01/ex5/ex5.component';
import {DetailProductComponent } from './Lap01/detail-product/detail-product.component';
import { CartComponent } from './Lap01/cart/cart.component'
import { ListComponent} from './Lap01/list/list.component';
const routes: Routes = [
  { path: 'product', component: ProductsComponent  },
  { path: 'ex1', component: Ex1Component  },
  { path: 'ex2', component: Ex2Component  },
  { path: 'ex5', component: Ex4Component  },
  { path: 'ex3', component: Ex5Component  },
  { path: 'product/detail/:id' , component : DetailProductComponent },
  { path: 'UrCart' , component : CartComponent},
  { path: 'lab01' , component : ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }