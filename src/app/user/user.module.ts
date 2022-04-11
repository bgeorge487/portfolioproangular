import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UserModule { }
