import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommodityListingComponent } from './commodity/commodity-listing/commodity-listing.component';
import { CommodityModule } from './commodity/commodity.module';
import { SearchStockComponent } from './commodity/search-stock/search-stock.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommodityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
