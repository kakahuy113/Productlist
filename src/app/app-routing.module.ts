import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Lap01/products/products.component';
import { Ex1Component } from './Lap01/ex1/ex1.component';
import { Ex2Component } from './Lap01/ex2/ex2.component';
import { Ex4Component } from './Lap01/ex4/ex4.component';
import { Ex5Component } from './Lap01/ex5/ex5.component';
import { DetailProductComponent } from './Lap01/detail-product/detail-product.component';
import { CartComponent } from './Lap01/cart/cart.component'
import { ListComponent} from './Lap01/list/list.component';
import { StudentComponent } from './Lap02/student/student.component';
import { StudentDetailComponent } from './Lap02/student-detail/student-detail.component';
import { SquareComponent } from './Lap03/square/square.component';
import { StudentComponent2 } from './Lap03/student/student.component';
import { NewyearComponent } from './Lap03/newyear/newyear.component';
import { CoffeeComponent } from './Lap03/coffee/coffee.component';
import { FilmlsComponent} from './Lap06/filmls/filmls.component';
import { DetailflimComponent } from './Lap06/detailflim/detailflim.component';
const routes: Routes = [
  { path: 'product', component: ProductsComponent  },
  { path: 'ex1', component: Ex1Component  },
  { path: 'ex2', component: Ex2Component  },
  { path: 'ex5', component: Ex4Component  },
  { path: 'ex3', component: Ex5Component  },
  { path: 'product/detail/:id' , component : DetailProductComponent },
  { path: 'UrCart' , component : CartComponent},
  { path: 'lab01' , component : ListComponent},
  { path: 'lab02/student', component : StudentComponent },
  { path: 'lab02/student/:id', component : StudentDetailComponent },
  { path: 'Lab03/square', component : SquareComponent},
  { path: 'Lab03/student', component : StudentComponent2 },
  { path: 'Lab03/salary', component : NewyearComponent },
  { path: 'Lab03/coffee', component : CoffeeComponent },
  { path: 'Lab06/films' , component : FilmlsComponent }, 
  { path: 'Lab06/films/:url' , component : DetailflimComponent } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }