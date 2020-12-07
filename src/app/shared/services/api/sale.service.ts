import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductSaleDto } from 'src/app/models/e-commerce/product-sale.model';
import { BaseService } from './base.service';

@Injectable()
export class SaleService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getSales(): Observable<Array<ProductSaleDto>> {
    // return this.get<CartDto>(`carts/${1}`);
    return of([new ProductSaleDto(1, 'Leve 3 por 10'), new ProductSaleDto(1, 'Leve 3 por 40')]);
  }
}
