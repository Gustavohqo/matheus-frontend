import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  public changeLoading: Subject<boolean> = new Subject<boolean>();
}
