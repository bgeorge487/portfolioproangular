
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { asyncScheduler } from 'rxjs/internal/scheduler/async';
import {map} from 'rxjs/operators'
import { AuthService } from 'src/app/auth/auth.service';
import { CommodityService } from 'src/app/commodity/commodity.service';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { CoinDetail } from 'src/app/shared/interfaces/commodity-interfaces/coin-detail';
import { UserCommodity } from 'src/app/shared/interfaces/commodity-interfaces/user-commodity';

@Component({
  selector: 'app-user-commodity-details',
  templateUrl: './user-commodity-details.component.html',
  styleUrls: ['./user-commodity-details.component.css']
})
export class UserCommodityDetails implements OnInit {



crypto?:CoinDetail;
stockDetail:any

  constructor(private route:ActivatedRoute, private _commodityService:CommodityService, private _authService:AuthService) {   
  }

  ngOnInit(): void {
    const resolvedData:UserCommodity = this.route.snapshot.data['resolvedCommodity'];
    this.getCommodityDetails(resolvedData)
                                      
  }

  getCommodityDetails(userCommodity:UserCommodity){
    if(userCommodity.uuid){
      this._commodityService.getCryptobyUuid(userCommodity.uuid).subscribe(resp=> this.crypto=resp)}
      else{
        this._commodityService.userAssetSearch(userCommodity.stockSymbol)
         .subscribe((response) => {this.stockDetail = response}) }    
  }
}

    