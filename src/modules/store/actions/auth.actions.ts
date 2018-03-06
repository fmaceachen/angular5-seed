import { Action } from '@ngrx/store';

// Models
import { IAuthData } from '~store/models/authdata.model';

export enum AuthActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILED = '[Login] Login failed',
  LOGOUT = '[Logout] Logout',
  LOGOUT_SUCCESS = '[Logout] Logout success',
  LOGOUT_FAILED = '[Logout] Logout failed'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: IAuthData) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any) {}
}

export class LogoutFailed implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILED;
  constructor(public payload: any) {}
}

export type AuthActions
  = Login
  | LoginSuccess
  | LoginFailed
  | Logout
  | LogoutSuccess
  | LogoutFailed;
