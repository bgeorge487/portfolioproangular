import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthResponseDto } from 'src/app/auth-interfaces/login-models/auth-response-dto';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { UserChange } from '../user-interfaces/user-change';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = '';
  securityObject: AuthResponseDto;
  id = '';
  commodities: UserChange[] =[];

user!:AuthResponseDto;
isUserAuthenticated!: boolean;

  constructor(public _authService :AuthService, private _userService:UserService ) { 
    this.securityObject = _authService.securityObject;
    this.title=this.securityObject.email;
    this.id=this.securityObject.id;
  }

  ngOnInit(): void {
  this.getUserCommodities(this.id)

}

private getUserCommodities(id:any){

  this._userService.getUserCommodities(id)
    .subscribe(stonks => this.commodities=stonks)
}


}