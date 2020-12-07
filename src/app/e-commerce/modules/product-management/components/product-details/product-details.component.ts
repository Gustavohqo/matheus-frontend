import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { ProductService } from 'src/app/shared/services/api/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];

  product?: ProductDto;

  modalIsVisible = false;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {}

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
    this.subscriptions.push(
      this.productService.getProduct(id).subscribe((product: ProductDto) => {
        this.product = product;
      }),
    );
  }

  goBack(): void {
    this.router.navigate(['/e-commerce/product-management']);
  }

  changeModalMode(): void {
    this.modalIsVisible = !this.modalIsVisible;
  }

  deleteProduct(): void {}

  edit(): void {
    this.router.navigate(['e-commerce/product-management/', this.product?.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
}
