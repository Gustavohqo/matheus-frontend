import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { ProductCreationDto } from 'src/app/models/e-commerce/product-creation.model';
import { ProductEditionDto } from 'src/app/models/e-commerce/product-edition.model';
import { CategoryDto } from 'src/app/models/e-commerce/category.model';
import { ProductInformationDto } from 'src/app/models/e-commerce/product-information.model';
import { ProductSaleDto } from 'src/app/models/e-commerce/product-sale.model';
import { ProductImageDto } from 'src/app/models/e-commerce/product-image.dto';
import { BaseService } from './base.service';

@Injectable()
export class ProductService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getProducts(): Observable<Array<SimpleProductDto>> {
    // return this.get<Array<SimpleProductDto>>('products');
    return of([
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        2,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        3,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        4,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        5,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        6,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        7,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        8,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        9,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        10,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        11,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        12,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        13,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        14,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        15,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        16,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        17,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        18,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        19,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
      new SimpleProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
      ),
    ]);
  }

  getProduct(id: number): Observable<ProductDto> {
    // return this.get<ProductDto>(`products/${id}`);
    return of(
      new ProductDto(
        1,
        'cod_123',
        'produto_teste',
        200.45,
        'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg',
        new CategoryDto(1, 'teste'),
        'descrição muito massa descrição muito massa descrição muito massa descrição muito massa descrição muito massa descrição muito massa descrição muito massa',
        [new ProductInformationDto(1, 'Resolução', '1080x720'), new ProductInformationDto(2, 'Resolução 2', '1920x720')],
        [new ProductSaleDto(1, 'Leve 3 por 10'), new ProductSaleDto(1, 'Leve 3 por 40')],
        [
          new ProductImageDto(1, 'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg'),
          new ProductImageDto(1, 'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg'),
          new ProductImageDto(1, 'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg'),
          new ProductImageDto(1, 'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg'),
          new ProductImageDto(1, 'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg'),
          new ProductImageDto(1, 'https://images-americanas.b2w.io/produtos/01/00/img/1446551/8/1446551843_1GG.jpg'),
        ],
      ),
    );
  }

  createProduct(product: ProductCreationDto): Observable<SimpleProductDto> {
    return this.post<SimpleProductDto>('products', { product });
  }

  editProduct(id: number, product: ProductEditionDto): Observable<null> {
    return this.put(`products/${id}`, { product });
  }

  deleteProduct(id: number): Observable<null> {
    return this.delete(`products/${id}`);
  }
}
