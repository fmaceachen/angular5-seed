import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

// Actions
import { AuthActionTypes } from '~store/actions/auth.actions';
import * as authActions from '~store/actions/auth.actions';

// Services
import { AuthServices } from '~auth/services/auth.services';

@Injectable()
export class AuthEffects {
  @Effect() login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: authActions.Login) => action.payload),
    mergeMap(payload =>
      this.authServices.login(payload).pipe(
        map(data => ({ type: AuthActionTypes.LOGIN_SUCCESS, payload: data })),
        catchError((error) => of({ type: AuthActionTypes.LOGIN_FAILED, payload: error }))
      )
    )
  );

  @Effect() loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    map((action: authActions.LoginSuccess) => action.payload),
    tap(payload => this.router.navigate(['/dashboard']))
  );


  constructor(
    private authServices: AuthServices,
    private router: Router,
    private actions$: Actions
  ) {}
}
