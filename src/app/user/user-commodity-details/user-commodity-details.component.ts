
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

currentUser!:AuthResponseDto;


commodityDetail!:UserCommodity;
paramId:string =''
name:string=""
symbol:string=""
uuid: string='';
loading: boolean =true;
crypto?:CoinDetail;
stockDetail:any

  constructor(private route:ActivatedRoute, private _commodityService:CommodityService, private _authService:AuthService) { 
     
  }

  ngOnInit(): void {
      this.paramId = this.route.snapshot.paramMap.get('id') || ''
      console.log(+this.paramId);

      this._commodityService.getCommodityById(+this.paramId)
     .subscribe({next: (resp) => this.commodityDetail=resp,});
    
     const waitForIt:any = ()=>{ if(this.commodityDetail.type=="Crypto")
     {this._commodityService.getCryptobyUuid(this.commodityDetail.uuid).subscribe(resp=> this.crypto=resp)}
     else{
      this._commodityService.userAssetSearch(this.commodityDetail.stockSymbol)
       .subscribe((response) => {this.stockDetail = response})
    }
    }
    
                                                    
       
      asyncScheduler.schedule(waitForIt, 1500);
        
    
      }

      
}

    // .pipe(map((resp)=>{this.nerd= JSON.parse(JSON.stringify(resp));return this.nerd }))
    //                                                     .subscribe(resp=>this.nerd=resp
