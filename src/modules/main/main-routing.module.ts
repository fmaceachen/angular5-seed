// Framework
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

// Modules
import { AuthModule } from '~auth/auth.module';

// Components
import { AlwaysAuthGuard } from '~auth/guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginModule'
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule',
        canActivate: [AlwaysAuthGuard]
      }
    ]),
    AuthModule
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
