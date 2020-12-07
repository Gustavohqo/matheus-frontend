import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { SelectInput } from 'src/app/models/shared/select-input.model';
import { ProductService } from 'src/app/shared/services/api/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];

  suggestionsOfProducts: Array<SimpleProductDto> = [];

  sizes = [
    new SelectInput('P', 1),
    new SelectInput('PP', 2),
    new SelectInput('M', 3),
    new SelectInput('G', 4),
    new SelectInput('GG', 5),
    new SelectInput('GGG', 6),
  ];

  product?: ProductDto;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {}

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
    this.subscriptions.push(
      this.productService.getProduct(id).subscribe((product: ProductDto) => {
        this.product = product;
      }),
    );
  }

  getSuggestions(): void {
    this.subscriptions.push(
      this.productService.getProducts().subscribe((products: Array<SimpleProductDto>) => {
        this.suggestionsOfProducts = products;
      }),
    );
  }

  addProductToCart(): void {
    this.router.navigate(['/e-commerce/cart']);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
}
