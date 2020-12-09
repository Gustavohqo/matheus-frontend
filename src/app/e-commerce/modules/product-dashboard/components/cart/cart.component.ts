import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCartDto } from 'src/app/models/e-commerce/product-cart.model';
import { CartDto } from 'src/app/models/e-commerce/cart.model';
import { CartService } from 'src/app/shared/services/api/cart.service';
import { ProductCartService } from 'src/app/shared/services/api/product-cart.service copy';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  userCart?: CartDto;

  constructor(
    private cartService: CartService,
    private router: Router,
    private productCartService: ProductCartService,
    public loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.getUserCart();
  }

  getUserCart(): void {
    this.loadingService.changeLoading.next(true);

    this.cartService.getCart().subscribe({
      next: (cart: CartDto) => {
        this.loadingService.changeLoading.next(false);
        this.userCart = cart;
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  addQuantity(productCart: ProductCartDto): void {
    const newQuantity = productCart?.quantity + 1;
    this.loadingService.changeLoading.next(true);

    this.productCartService.editProductCart(productCart?.id, productCart?.product.id, newQuantity).subscribe({
      next: () => {
        this.loadingService.changeLoading.next(false);
        this.getUserCart();
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  decreaseQuantity(productCart: ProductCartDto): void {
    const newQuantity = productCart?.quantity - 1;
    if (newQuantity === 0) {
      this.removeProduct(productCart);
    } else {
      this.loadingService.changeLoading.next(true);

      this.productCartService.editProductCart(productCart?.id, productCart?.product.id, newQuantity).subscribe({
        next: () => {
          this.loadingService.changeLoading.next(false);
          this.getUserCart();
        },
        error: () => this.loadingService.changeLoading.next(false),
      });
    }
  }

  removeProduct(productCart: ProductCartDto): void {
    this.loadingService.changeLoading.next(true);

    this.productCartService.deleteProductCart(productCart?.id).subscribe({
      next: () => {
        this.loadingService.changeLoading.next(false);
        this.getUserCart();
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  checkout(): void {
    this.router.navigate(['e-commerce/product-dashboard']);
  }
}
