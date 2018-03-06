import { Action } from '@ngrx/store';

// Models
import { IUser } from '~store/models/user.model';

export enum UserActionTypes {
  GET_USER = '[User] Get user',
  GET_USER_SUCCESS = '[User] Get user success',
  GET_USER_FAILED = '[User] Get user failed',
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GET_USER;
  constructor(public payload: string) {}
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailed implements Action {
  readonly type = UserActionTypes.GET_USER_FAILED;
  constructor(public payload: any) {}
}

export type UserActions
  = GetUser
  | GetUserSuccess
  | LoginFailed;
