import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthServices {

  constructor(
    private http: HttpClient
  ) {}

  login(payload): Observable<any> {
    return this.http.post('http://localhost:3000/login', payload);
  }
}
