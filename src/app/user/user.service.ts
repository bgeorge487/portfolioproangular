import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserChange } from './user-interfaces/user-change';
import { UserCommodity } from './user-interfaces/user-commodity';
import { map, observable } from 'rxjs';
import { Coins } from './user-interfaces/coins';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUriCommodity : string ="https://localhost:7168/api/commodity";
  private apiUriChange : string ="https://localhost:7168/api/change";
  private apiUriCoin : string ="https://localhost:7168/api/coin";
  private apiUriQuote : string ="https://localhost:7168/api/quote";
  private apiUriSearch : string ="https://localhost:7168/api/search";
  private apiUriSymbol : string ="https://localhost:7168/api/symbol";
  private apiUriUser : string ="https://localhost:7168/api/user";
  
 
  
  constructor(private http: HttpClient) { }
 

  getUserCommodities(id:any){
    return this.http.get<UserChange[]>(`${this.apiUriUser}?id=${id}`)
  }

  userAssetSearch(ticker:string){
    return this.http.get<any>(`${this.apiUriSymbol}?symbol=${ticker}`,{observe:'body'})  
  }

  addAsset(newCommodity:UserCommodity){
    delete newCommodity.commodityId;
    return this.http.post<any>(this.apiUriCommodity,newCommodity, {observe:'body'});    
  }

  userCryptoSearch(query:string){

    return this.http.get<Coins[]>(`${this.apiUriSearch}/crypto?query=${query}`)

  }

}
