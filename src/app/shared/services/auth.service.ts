import { Injectable } from '@angular/core';
import { AuthDto } from 'src/app/auth-interfaces/login-models/auth-dto';
import { RegistrationDto } from 'src/app/auth-interfaces/reg-model/registration-dto';
import { RegResponseDto } from 'src/app/auth-interfaces/reg-model/reg-response-dto';
import { AuthResponseDto } from 'src/app/auth-interfaces/login-models/auth-response-dto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private readonly URL = "https://localhost:7168/api/accounts/";

  constructor(private _http: HttpClient,) { }

   public registerUser = (body: RegistrationDto) => {

    return this._http.post<RegResponseDto>(this.URL+"registration", body)
  }

  public loginUser = (body: AuthDto) => {
    return this._http.post<AuthResponseDto>(this.URL+"login", body);
  }
}


