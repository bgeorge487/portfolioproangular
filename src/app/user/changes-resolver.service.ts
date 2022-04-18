import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommodityService } from '../commodity/commodity.service';
import { UserChangesResolved } from '../shared/interfaces/user-interfaces/user-changes-resolverd';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChangesResolver implements Resolve<UserChangesResolved>{

  constructor(private _commodityService:CommodityService, private _userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserChangesResolved | Observable<UserChangesResolved> | Promise<UserChangesResolved> {
 
    const id= Number(route.paramMap.get('id'));
    const uid = route.paramMap.get('uid');
     return this._userService.getUserCommodityDetail(uid!,id)
     .pipe(
      map(res =>({userChangeArray : res})))     
                      
  }
}
// return this._commodityService.getCommodityById(id, symbol, uuid)
// .pipe(
//   map(userCommodity => ({ userCommodity: userCommodity })))
