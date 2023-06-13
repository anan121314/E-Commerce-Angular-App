import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdComponent } from './component/prod/prod.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path:'',component:ProductComponent},
  { path:'product',component:ProdComponent},
  { path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
