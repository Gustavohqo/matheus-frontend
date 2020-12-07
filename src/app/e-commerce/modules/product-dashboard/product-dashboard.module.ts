import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsRoutingModule } from './product-dashboard-routing.module';

@NgModule({
  declarations: [ProductDashboardComponent, ProductItemComponent, ProductViewComponent, CartComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
  providers: [],
})
export class ProductDashboardModule {}
