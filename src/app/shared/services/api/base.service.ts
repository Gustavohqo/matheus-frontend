import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pickBy } from 'lodash';

export class BaseService {
  constructor(private http: HttpClient, public router: Router) {}

  private getRoute(route: string): string {
    return `${environment.apiUrl}/${route}`;
  }

  private createHttpParams(params: {} = {}): HttpParams {
    const cleanedObject = pickBy(params, (param) => param != null) as {};
    return new HttpParams({ fromObject: cleanedObject });
  }

  protected get<T>(route: string, parameters: {} = {}) {
    const url = this.getRoute(route);
    return <Observable<T>>this.http.get(url, {
      params: this.createHttpParams(parameters),
    });
  }

  protected post<T>(route: string, body: Object) {
    const url = this.getRoute(route);
    return <Observable<T>>this.http.post(url, body);
  }

  protected put<T>(route: string, body: Object) {
    const url = this.getRoute(route);
    return <Observable<T>>this.http.put(url, body);
  }

  protected delete<T>(route: string) {
    const url = this.getRoute(route);
    return <Observable<T>>this.http.delete(url);
  }

  protected patch<T>(route: string, body: Object) {
    const url = this.getRoute(route);
    return <Observable<T>>this.http.patch(url, body);
  }
}
