import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'e-commerce', loadChildren: './e-commerce/e-commerce.module#ECommerceModule' },
  { path: '', pathMatch: 'full', redirectTo: 'e-commerce' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
