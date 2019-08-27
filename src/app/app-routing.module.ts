import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex4Component } from './ex4/ex4.component';
const routes: Routes = [
  { path: 'product', component: ProductsComponent  },
  { path: 'ex1', component: Ex1Component  },
  { path: 'ex2', component: Ex2Component  },
  { path: 'ex5', component: Ex4Component  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }