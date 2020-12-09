import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductCartService } from 'src/app/shared/services/api/product-cart.service copy';
import { ProductService } from 'src/app/shared/services/api/product.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

const DEFAULT_QUANTITY = 1;

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];

  suggestionsOfProducts: Array<SimpleProductDto> = [];

  product?: ProductDto;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productCartService: ProductCartService,
    public loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.getIdFromRoute();
    this.getSuggestions();
  }

  getIdFromRoute(): void {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params) => {
        this.getProduct(params.id);
      }),
    );
  }

  getProduct(id: number): void {
    this.loadingService.changeLoading.next(true);

    this.productService.getProduct(id).subscribe({
      next: (product: ProductDto) => {
        this.loadingService.changeLoading.next(false);
        this.product = product;
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  getSuggestions(): void {
    this.loadingService.changeLoading.next(true);

    this.productService.getProducts().subscribe({
      next: (products: Array<SimpleProductDto>) => {
        this.loadingService.changeLoading.next(false);
        this.suggestionsOfProducts = products;
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  addProductToCart(): void {
    this.loadingService.changeLoading.next(true);

    this.productCartService.createProductCart(this.product?.id, DEFAULT_QUANTITY).subscribe({
      next: () => {
        this.loadingService.changeLoading.next(false);
        this.router.navigate(['/e-commerce/cart']);
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
}
