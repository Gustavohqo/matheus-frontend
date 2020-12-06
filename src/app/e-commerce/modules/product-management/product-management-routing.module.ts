import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: ProductManagementComponent },
      { path: ':id/view', pathMatch: 'full', component: ProductDetailsComponent },
      { path: ':id/edit', pathMatch: 'full', component: ProductRegistrationComponent },
      { path: 'register', pathMatch: 'full', component: ProductRegistrationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductManagementRoutingModule {}
