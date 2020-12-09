import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { ProductCreationDto } from 'src/app/models/e-commerce/product-creation.model';
import { BaseService } from './base.service';

@Injectable()
export class ProductService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getProducts(): Observable<Array<SimpleProductDto>> {
    return this.get<Array<SimpleProductDto>>('products');
  }

  getProduct(id: number): Observable<ProductDto> {
    return this.get<ProductDto>(`products/${id}`);
  }

  createProduct(product: ProductCreationDto): Observable<SimpleProductDto> {
    return this.post<SimpleProductDto>('products', product);
  }

  editProduct(id: number | undefined, product: ProductCreationDto): Observable<null> {
    return this.put(`products/${id}`, product);
  }

  deleteProduct(id: number | undefined): Observable<null> {
    return this.delete(`products/${id}`);
  }
}
