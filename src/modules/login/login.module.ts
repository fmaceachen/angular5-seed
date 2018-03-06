// Framework
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,
} from '@angular/material';

// Modules
import { LoginRoutingModule } from './login-routing.module';
import { AppStoreModule } from '~store/store.module';

// Components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    LoginRoutingModule,
    AppStoreModule,

    // Material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule { }
