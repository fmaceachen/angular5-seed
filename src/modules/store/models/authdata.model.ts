export interface IAuthData {
  username: string;
  password: string;
}

export interface IAuthState {
  authData: IAuthData;
  error: any;
  loading: boolean;
}
