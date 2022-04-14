import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {


  private apiUri:string = "https://localhost:7168/api";

  constructor(private http: HttpClient) { }

  getSearchResult(search: string, type: string) {
    return this.http.get(`${this.apiUri}/Search?search=${search}&type=${type}`);
  }

  getStockQuote(symbol: string) {
    console.log(`${this.apiUri}/Quote?symbols=${symbol}`);
    return this.http.get(`${this.apiUri}/Quote?symbols=${symbol}`);
  }

  getCommodity() {
    return this.http.get(this.apiUri);
  }

  getCommodityDetails(id: string) {
    return this.http.get(`${this.apiUri}/${id}`)
  }

}
