import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductDashboardComponent },
  { path: ':id/view', pathMatch: 'full', component: ProductViewComponent },
  { path: 'cart', pathMatch: 'full', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
