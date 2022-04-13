import { Component, OnInit } from '@angular/core';
import { AuthDto } from 'src/app/auth-interfaces/login-models/auth-dto';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage: string = '';
  public showError: boolean = false;
  private _returnUrl: string = "";


  constructor(private _authService: AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

    public signIn = (loginFormValue:AuthDto) => {
      this.showError = false;
      const login = {... loginFormValue };
      const user: AuthDto = {
        email: login.email,
        password: login.password
      }
  
      this._authService.loginUser(user)

  }
}


// .subscribe({
//   next: resp =>  {
//     this._authService.sendAuthStateChangeNotification(resp.body!.isAuthenticated)
//     localStorage.setItem("token", resp.body!.token)
//     this._router.navigate(['profile']);
// },
//   error: err => { this.errorMessage = "error"}
// })