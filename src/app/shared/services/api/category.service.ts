import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryDto } from 'src/app/models/e-commerce/category.model';
import { BaseService } from './base.service';

@Injectable()
export class CategoryService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getCategories(): Observable<Array<CategoryDto>> {
    // return this.get<CartDto>(`carts/${1}`);
    return of([new CategoryDto(1, 'teste')]);
  }
}
