import { NgModule } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent, ProductItemComponent, ProductViewComponent],
  imports: [ProductsRoutingModule],
  providers: [],
})
export class ProductsModule {}
