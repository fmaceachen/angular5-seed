// Actions
import { UserActionTypes, UserActions } from '../actions/user.actions';

// Models
import { IUserState } from '../models/user.model';
import { IAppState } from '~store/models/appstate.model';

const initialState: IUserState = {
  user: null,
  error: null,
  loading: false
};

export function reducer(state: IUserState = initialState, action: UserActions): IUserState {
  switch (action.type) {
    case UserActionTypes.GET_USER: {
      return {
        ...state,
        loading: true
      };
    }

    case UserActionTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    }

    case UserActionTypes.GET_USER_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}
