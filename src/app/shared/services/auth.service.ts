import { Injectable } from '@angular/core';
import { AuthDto } from 'src/app/auth-interfaces/login-models/auth-dto';
import { RegistrationDto } from 'src/app/auth-interfaces/reg-model/registration-dto';
import { RegResponseDto } from 'src/app/auth-interfaces/reg-model/reg-response-dto';
import { AuthResponseDto } from 'src/app/auth-interfaces/login-models/auth-response-dto';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private readonly URL = "https://localhost:7168/api/accounts/";

   private _authChangeSub = new Subject<boolean>()
   public authChanged = this._authChangeSub.asObservable();

   public securityObject: AuthResponseDto = new AuthResponseDto();
  //  private securityObject = new Subject<AuthResponseDto>()
   
   constructor(private _http: HttpClient,  public _jwtHelper: JwtHelperService, public _router: Router) {

    }

   public registerUser = (body: RegistrationDto) => {

    return this._http.post<RegResponseDto>(this.URL+"registration", body)
  }

  public loginUser(body: AuthDto){
    return this._http.post<AuthResponseDto>(this.URL+"login", body)
    .subscribe(( resp ) =>{
      localStorage.setItem('token', resp.token);
      this.sendAuthStateChangeNotification(resp.isAuthenticated)
      Object.assign(this.securityObject, resp)
      this._router.navigate(['profile'])
    })
  }
 public getUserProfile(id:any){

 }

  public logout = () => {
    localStorage.removeItem("token");
    this.securityObject.init();
    this.sendAuthStateChangeNotification(false);
  }
  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }

  public isUserAuthenticated = (): boolean => {
    let token: any = localStorage.getItem("token");
    if (token &&  !this._jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else{
      return false;
    }
    
  }

}


