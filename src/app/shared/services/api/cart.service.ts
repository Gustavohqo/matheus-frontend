import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartDto } from 'src/app/models/e-commerce/cart.model';
import { BaseService } from './base.service';

const CART_ID = 1;

@Injectable()
export class CartService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getCart(): Observable<CartDto> {
    return this.get<CartDto>(`carts/${CART_ID}`);
  }
}
