export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  token: string;
  username: string;
  password: string;
}

export interface IUserState {
  user: IUser;
  error: any;
  loading: boolean;
}
