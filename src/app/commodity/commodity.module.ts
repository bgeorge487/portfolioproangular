import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityListingComponent } from './commodity-listing/commodity-listing.component';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { CoinComponent } from './coin/coin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    CommodityListingComponent,
    SearchStockComponent,
    CoinComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommodityListingComponent,
    SearchStockComponent,
    CoinComponent,
  ],
})
export class CommodityModule{}
