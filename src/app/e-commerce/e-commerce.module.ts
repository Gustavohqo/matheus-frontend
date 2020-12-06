import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ECommerceDashboardComponent } from './components/e-commerce-dashboard/e-commerce-dashboard.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductDashboardModule } from './modules/product-dashboard/product-dashboard.module';
import { ProductManagementModule } from './modules/product-management/product-management.module';

@NgModule({
  declarations: [ECommerceDashboardComponent],
  imports: [ECommerceRoutingModule, SharedModule, ProductManagementModule, ProductDashboardModule],
  providers: [],
})
export class ECommerceModule {}
