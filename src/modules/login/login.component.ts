import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// Models
import { IAuthData } from '~store/models/authdata.model';
import { IAppState } from '~store/models/appstate.model';

// Actions
import * as authActions from '~store/actions/auth.actions';

// Reducers
import * as fromRoot from '~store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private authData: IAuthData;
  public loading$: Observable<boolean>;

  constructor(
    private store$: Store<IAppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loading$ = this.store$.select(fromRoot.selectUserLoading);
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [ 'test', Validators.required ],
      password: [ 'test', Validators.required ]
    });
  }

  onSubmit() {
    this.authData = this.prepareAuthData();
    this.store$.dispatch(new authActions.Login(this.authData));
  }

  prepareAuthData(): IAuthData {
    const formModel = this.loginForm.value;

    // return new `AuthData` object containing a combination of original auth value(s)
    // and deep copies of changed form model values
    const saveAuthData: IAuthData = {
      username: formModel.username as string,
      password: formModel.password as string
    };
    return saveAuthData;
  }

}
