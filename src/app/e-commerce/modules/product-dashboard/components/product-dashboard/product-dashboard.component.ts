import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductService } from 'src/app/shared/services/api/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit, OnDestroy {
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
