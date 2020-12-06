import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECommerceDashboardComponent } from './components/e-commerce-dashboard/e-commerce-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: ECommerceDashboardComponent },
      { path: 'product-management', loadChildren: './modules/product-management/product-management.module#ProductManagementModule' },
      { path: 'product-dashboard', loadChildren: './modules/product-dashboard/product-dashboard.module#ProductDashboardModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
