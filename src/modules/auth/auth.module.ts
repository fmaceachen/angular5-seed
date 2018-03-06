// Framework
import { NgModule } from '@angular/core';

// Guards
import { AlwaysAuthGuard } from './guards/auth.guard';
import { AuthServices } from './services/auth.services';

@NgModule({
  declarations: [],
  providers: [
    AlwaysAuthGuard,
    AuthServices
  ],
  exports: []
})
export class AuthModule { }
