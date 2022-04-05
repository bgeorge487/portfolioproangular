import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { CommodityModule } from './commodity/commodity.module';

import { AppComponent } from './app.component';
import { CommodityService } from './commodity/commodity.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    CommodityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
