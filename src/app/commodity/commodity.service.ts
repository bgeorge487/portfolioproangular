import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCommodity } from '../shared/interfaces/commodity-interfaces/user-commodity';
import { Coins } from '../shared/interfaces/commodity-interfaces/coins';
import { map, Subject } from 'rxjs';
import { CoinDetail } from '../shared/interfaces/commodity-interfaces/coin-detail';


@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  private apiUriCommodity : string ="https://localhost:7168/api/commodity";
  private apiUriChange : string ="https://localhost:7168/api/change";
  private apiUriCoin : string ="https://localhost:7168/api/coin";
  private apiUriQuote : string ="https://localhost:7168/api/quote";
  private apiUriSearch : string ="https://localhost:7168/api/search";
  private apiUriSymbol : string ="https://localhost:7168/api/symbol";
  private apiUriUser : string ="https://localhost:7168/api/user";
  private apiUri:string = "https://localhost:7168/api";




  constructor(private http: HttpClient) { }

  getSearchResult(search: string, type: string) {
    return this.http.get(`${this.apiUri}/Search?search=${search}&type=${type}`);
  }

  getStockQuote(symbol: string) {
    console.log(`${this.apiUri}/Quote?symbols=${symbol}`);
    return this.http.get(`${this.apiUri}/Quote?symbols=${symbol}`);
  }
  getCryptobyUuid(uuid:any){
    return this.http.get<CoinDetail>(`${this.apiUriCoin}/uuid?uuid=${uuid}`,{observe:'body'})
  }
  // .pipe(map((resp)=>{JSON.parse(JSON.stringify(resp))}))
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


  getNewlyAddedAsset(name:string, symbol:string){
    
    return this.http.get<UserCommodity>(`${this.apiUriCommodity}/new?name=${name}&symbol=${symbol}`)
  }

  getCommodityById(id:number){
    return this.http.get<UserCommodity>(`${this.apiUriCommodity}/${id}`)
  }

 
  getCommodityByTicker(ticker:string){
    return this.http.get<UserCommodity[]>(`${this.apiUriCommodity}/ticker?ticker=${ticker}`)
  }
}
