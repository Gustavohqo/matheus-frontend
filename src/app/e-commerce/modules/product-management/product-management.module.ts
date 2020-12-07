import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDeletionModalComponent } from './components/product-deletion-modal/product-deletion-modal.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';

@NgModule({
  declarations: [ProductManagementComponent, ProductDetailsComponent, ProductRegistrationComponent, ProductDeletionModalComponent],
  imports: [CommonModule, ProductManagementRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class ProductManagementModule {}
