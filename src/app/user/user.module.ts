import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserAssetComponent } from './add-user-asset/add-user-asset.component';
import { CommodityModule } from '../commodity/commodity.module';
import { AddCommodityComponent } from './add-commodity/add-commodity.component';
import { UserCommodityDetails } from './user-commodity-details/user-commodity-details.component';
import { UserUpdateComponent } from './user-profile/user-update/user-update.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    AddCommodityComponent,
    AddUserAssetComponent,
    UserCommodityDetails,
    UserUpdateComponent
  ],
  imports: [

    CommonModule,
    CommodityModule,
    RouterModule.forChild([
     {
      path:'',
      component:UserProfileComponent
     },
    {
    path: 'user-profile/:id/details',
    component: UserCommodityDetails
    },
    {
      path: 'user-profile/:id/update',
      component: UserUpdateComponent
      },
    {
    path: 'add-commodity',
    component: AddCommodityComponent
    },
    {
    path: 'portfolio',
    component: AddUserAssetComponent
    } 
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class UserModule { }
