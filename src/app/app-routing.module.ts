import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
