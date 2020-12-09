import { NgModule } from '@angular/core';
import { CartService } from '../shared/services/api/cart.service';
import { CategoryService } from '../shared/services/api/category.service';
import { ProductCartService } from '../shared/services/api/product-cart.service copy';
import { ProductService } from '../shared/services/api/product.service';
import { SaleService } from '../shared/services/api/sale.service';
import { SharedModule } from '../shared/shared.module';
import { ECommerceDashboardComponent } from './components/e-commerce-dashboard/e-commerce-dashboard.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductDashboardModule } from './modules/product-dashboard/product-dashboard.module';
import { ProductManagementModule } from './modules/product-management/product-management.module';

@NgModule({
  declarations: [ECommerceDashboardComponent],
  imports: [ECommerceRoutingModule, SharedModule, ProductManagementModule, ProductDashboardModule],
  providers: [ProductService, CartService, SaleService, CategoryService, ProductCartService],
})
export class ECommerceModule {}
