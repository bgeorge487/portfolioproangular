import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { UserChange } from '../../shared/interfaces/user-interfaces/user-change';
import { CommodityService } from 'src/app/commodity/commodity.service';
import { User } from 'src/app/shared/interfaces/user-interfaces/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userName = '';
  commodities: UserChange[] =[];
  currentUser!:AuthResponseDto;
  notifierSubscription:Subscription;


  constructor(public _authService :AuthService, private _userService:UserService ) { 
    
    this._authService.currentUser.subscribe(resp => this.currentUser = resp);
    this.notifierSubscription = this._userService.hasChanged.subscribe(_ => {
      this.getUserCommodities(this.currentUser.id)
  })
}

  ngOnInit(): void {
  this.getUserCommodities(this.currentUser.id)
 
  this.userName=this.currentUser.email.substring(0, this.currentUser.email.lastIndexOf("@"))

}

private getUserCommodities(id:any){

  this._userService.getUserCommodities(id)
    .subscribe(stonks => this.commodities=stonks)
}


}