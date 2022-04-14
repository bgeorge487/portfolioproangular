import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AddAsset } from './add-asset/add-asset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
    {   path: 'profile',   
    component: UserProfileComponent,
    //canActivate: [AuthGuard]
    },
    {
      path: 'profile',
      component:DashboardComponent,
       children: [
         {path: '', redirectTo: 'profile', pathMatch:'full'},
         {path:'add-asset', component:AddAsset}
       ]
    }

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRouting { }
  