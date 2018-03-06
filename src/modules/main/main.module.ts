// Framework
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppStoreModule } from '~store/store.module';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Components
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
