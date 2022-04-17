import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthResponseDto } from '../shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { User } from '../shared/interfaces/user-interfaces/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  currentUser?:AuthResponseDto;
  userName:any;
 

  constructor(private _authService: AuthService, private _router: Router) { 

    this._authService.currentUser.subscribe(resp => this.currentUser = resp);

  }

  ngOnInit(): void {
    this.userName=this.currentUser?.email.substring(0, this.currentUser?.email.lastIndexOf("@"))
  
  
    

  }

  public logout = () => {
    this._authService.logout();
    this._router.navigateByUrl('/home');
  }

}