import { Component, OnInit } from '@angular/core';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductService } from 'src/app/shared/services/api/product.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
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
