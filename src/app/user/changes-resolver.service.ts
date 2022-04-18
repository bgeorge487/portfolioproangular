import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommodityService } from '../commodity/commodity.service';
import { UserChange } from '../shared/interfaces/user-interfaces/user-change';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChangesResolver implements Resolve<UserChange[]>{

  constructor(private _commodityService:CommodityService, private _userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserChange[] | Observable<UserChange[]> | Promise<UserChange[]> {
 
    const id= Number(route.paramMap.get('id'));
    const uid = route.paramMap.get('uid');
    return this._userService.getUserCommodityDetail(uid!,id)

  
  }
}
