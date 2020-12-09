import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SaleDto } from 'src/app/models/e-commerce/sale.model';
import { BaseService } from './base.service';

@Injectable()
export class SaleService extends BaseService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getSales(): Observable<Array<SaleDto>> {
    return this.get<Array<SaleDto>>(`sales/`);
  }
}
