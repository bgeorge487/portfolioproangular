import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { CommodityModule } from './commodity/commodity.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    UserModule,
    CommodityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
