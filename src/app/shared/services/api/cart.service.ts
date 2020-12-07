import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CartProductDto } from 'src/app/models/e-commerce/cart-product.model';
import { CartDto } from 'src/app/models/e-commerce/cart.model';
import { CategoryDto } from 'src/app/models/e-commerce/category.model';
import { BaseService } from './base.service';

@Injectable()
export class CartService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getCart(): Observable<CartDto> {
    // return this.get<CartDto>(`carts/${1}`);
    return of(
      new CartDto(
        1,
        [
          new CartProductDto(
            1,
            'cod_123',
            'produto_teste',
            200.45,
            'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
            new CategoryDto(1, 'teste'),
            200.45,
            1,
            undefined,
          ),
          new CartProductDto(
            1,
            'cod_123',
            'produto_teste',
            240.45,
            'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
            new CategoryDto(1, 'teste'),
            201.45,
            1,
            'Leve 3 por 1',
          ),
        ],
        500,
      ),
    );
  }
}
