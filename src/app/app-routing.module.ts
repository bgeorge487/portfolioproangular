import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommodityListingComponent } from './commodity/commodity-listing/commodity-listing.component';
import { CommodityModule } from './commodity/commodity.module';
import { SearchStockComponent } from './commodity/search-stock/search-stock.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path:'commodity', 
    component: CommodityListingComponent 
  },
  {
    path:'search-stock', 
    component: SearchStockComponent 
  },
  {
    path:'**', component: PageNotFoundComponent 
  }
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
