import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityListingComponent } from './commodity-listing/commodity-listing.component';



@NgModule({
  declarations: [
    CommodityListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommodityListingComponent
  ]
})
export class CommodityModule { }
