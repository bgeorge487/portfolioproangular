import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserRouting } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAsset } from './add-asset/add-asset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserAssetComponent } from './add-user-asset/add-user-asset.component';






@NgModule({
  declarations: [
    UserProfileComponent,
    DashboardComponent,
    AddAsset,
    AddUserAssetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRouting,
    FormsModule,
    ReactiveFormsModule

    
  ]
})
export class UserModule { }
