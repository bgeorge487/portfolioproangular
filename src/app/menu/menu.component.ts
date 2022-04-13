import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isUserAuthenticated!: boolean;

  constructor(private _authService: AuthService, private _router: Router) { 
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  ngOnInit(): void {
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  public logout = () => {
    this._authService.logout();
    this._router.navigate(["/"]);
  }

}