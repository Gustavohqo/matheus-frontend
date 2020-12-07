import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductService } from 'src/app/shared/services/api/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit, OnDestroy {
  products: Array<SimpleProductDto> = [];

  productsSubscription?: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.productService.getProducts().subscribe((products: Array<SimpleProductDto>) => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
  }
}
