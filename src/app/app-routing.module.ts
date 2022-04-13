import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommodityListingComponent } from './commodity/commodity-listing/commodity-listing.component';
import { CommodityModule } from './commodity/commodity.module';
import { SearchStockComponent } from './commodity/search-stock/search-stock.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'commodity', component: CommodityListingComponent },
  {path:'search-stock', component: SearchStockComponent },

  {path:'', redirectTo: '/msft', pathMatch: 'full' },
  {path:'**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    CommodityModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
