import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartProductDto } from 'src/app/models/e-commerce/cart-product.model';
import { CartDto } from 'src/app/models/e-commerce/cart.model';
import { CartService } from 'src/app/shared/services/api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];

  userCart?: CartDto;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.getUserCart();
  }

  getUserCart(): void {
    this.subscriptions.push(
      this.cartService.getCart().subscribe((cart: CartDto) => {
        this.userCart = cart;
      }),
    );
  }

  addQuantity(product: CartProductDto): void {}

  decreaseQuantity(product: CartProductDto): void {}

  removeProduct(product: CartProductDto): void {}

  checkout(): void {
    this.router.navigate(['e-commerce/product-dashboard']);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
}
