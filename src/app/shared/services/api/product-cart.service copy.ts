import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductCartDto } from 'src/app/models/e-commerce/product-cart.model';
import { BaseService } from './base.service';

const CART_ID = 1;

@Injectable()
export class ProductCartService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  createProductCart(productId: number | undefined, quantity: number): Observable<ProductCartDto> {
    return this.post<ProductCartDto>('productsCart', { productId, quantity, cartId: CART_ID });
  }

  editProductCart(id: number | undefined, productId: number | undefined, quantity: number): Observable<null> {
    return this.put(`productsCart/${id}`, { productId, quantity, cartId: CART_ID });
  }

  deleteProductCart(id: number | undefined): Observable<null> {
    return this.delete(`productsCart/${id}`);
  }
}
