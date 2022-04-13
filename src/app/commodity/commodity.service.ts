import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private http: HttpClient) { }

  private apiUri: string = "";

  getCommodity() {
    return this.http.get(this.apiUri);
  }

  getCommodityDetails(id: string) {
    return this.http.get(`${this.apiUri}/${id}`)
  }


}
