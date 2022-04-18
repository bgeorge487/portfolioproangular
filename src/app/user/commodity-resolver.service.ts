import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommodityService } from '../commodity/commodity.service';
import { UserCommodity } from '../shared/interfaces/commodity-interfaces/user-commodity';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommodityResolver implements Resolve<UserCommodity>{

  constructor(private _commodityService:CommodityService, private _userService:UserService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserCommodity | Observable<UserCommodity> | Promise<UserCommodity> {
    const id= Number(route.paramMap.get('id'))|| undefined;
    const symbol:string = route.paramMap.get('symbol')|| '';
    const uuid:string  = route.paramMap.get('uuid')|| '';
    
    return this._commodityService.getCommodityById(id, symbol, uuid)
    
    throw new Error('Method not implemented.');
  }

  
}
// getCommodityById(id?:number, symbol?:string, uuid?: string){
//   if(typeof id!=='undefined' && typeof uuid =='undefined'){
//   return this.http.get<UserCommodity>(`${this.apiUriCommodity}/${id}`)
//   }
//   else{
//     return this.getNewlyAddedAsset(symbol,uuid)
//   }
// }