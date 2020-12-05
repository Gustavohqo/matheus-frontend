import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    ProductViewComponent,
    CartComponent,
    ProductManagementComponent,
    ProductRegistrationComponent,
    ProductDetailsComponent,
  ],
  imports: [ProductsRoutingModule, SharedModule],
  providers: [],
})
export class ProductsModule {}
