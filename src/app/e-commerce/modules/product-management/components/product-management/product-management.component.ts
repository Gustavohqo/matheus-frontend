import { Component, OnInit } from '@angular/core';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductService } from 'src/app/shared/services/api/product.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  products: Array<SimpleProductDto> = [];

  constructor(private productService: ProductService, public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loadingService.changeLoading.next(true);

    this.productService.getProducts().subscribe({
      next: (products: Array<SimpleProductDto>) => {
        this.loadingService.changeLoading.next(false);
        this.products = products;
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }
}
