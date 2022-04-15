import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommodityModule } from './commodity/commodity.module';

import { AppComponent } from './app.component';

import { CommodityListingComponent } from './commodity/commodity-listing/commodity-listing.component';
import { SearchStockComponent } from './commodity/search-stock/search-stock.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { JwtModule } from "@auth0/angular-jwt";

import { UserModule } from './user/user.module';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    CommodityModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:() => {
          return localStorage.getItem('token'); },
          allowedDomains: ['http://localhost:4200']
      }
    }),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
