import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsComponent },
  { path: ':id', pathMatch: 'full', component: ProductViewComponent },
  { path: 'cart', pathMatch: 'full', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
