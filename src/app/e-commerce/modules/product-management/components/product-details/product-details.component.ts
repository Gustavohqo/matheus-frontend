import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { ProductService } from 'src/app/shared/services/api/product.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];

  product?: ProductDto;

  modalIsVisible = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.getIdFromRoute();
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

  goBack(): void {
    this.router.navigate(['/e-commerce/product-management']);
  }

  changeModalMode(): void {
    this.modalIsVisible = !this.modalIsVisible;
  }

  deleteProduct(): void {
    this.loadingService.changeLoading.next(true);

    this.productService.deleteProduct(this.product?.id).subscribe({
      next: () => {
        this.loadingService.changeLoading.next(false);
        this.goBack();
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  edit(): void {
    this.router.navigate(['e-commerce/product-management/', this.product?.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
}
