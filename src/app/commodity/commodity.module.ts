import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityListingComponent } from './commodity-listing/commodity-listing.component';

import { SearchStockComponent } from './search-stock/search-stock.component';
import { CoinComponent } from './coin/coin.component';
import { FormsModule } from '@angular/forms';

import { CommodityService } from './commodity.service';


@NgModule({
  declarations: [
    CommodityListingComponent,
    SearchStockComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchStockComponent,
    CommodityListingComponent,   
    CommonModule,
  ]
})
export class CommodityModule { }
