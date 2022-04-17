import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CommodityService } from '../../commodity/commodity.service';
import { FormGroup, FormsModule, NgForm, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserCommodity } from '../../shared/interfaces/commodity-interfaces/user-commodity';
import { StockDetails } from '../../shared/interfaces/commodity-interfaces/stock-details';
import { map, tap, throwError } from 'rxjs';
import { Coins } from '../../shared/interfaces/commodity-interfaces/coins';
import { UserChange } from 'src/app/shared/interfaces/user-interfaces/user-change';
import { UserService } from '../user.service';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';

@Component({
  
  templateUrl: './add-commodity.component.html',
  styleUrls: ['./add-commodity.component.css']
})
export class AddCommodityComponent implements OnInit {
 
  
searchForm!:FormGroup;
 submitted = false;
 isCryptoSearch = false;
 isStockSearch = false;
 doAddToPortfolio=false;

 currentUser!: AuthResponseDto


 commodity!:UserCommodity;
 message:any ='';
 stockDetail!: StockDetails
 crypto!:Coins[]

 

  change!:UserChange

  constructor(public _commodityService:CommodityService,private _authService: AuthService,public _userService:UserService, private router: Router, private route: ActivatedRoute) 
  {
    this._authService.currentUser.subscribe(resp => this.currentUser = resp);

  }

  ngOnInit(): void { 
   
    this.searchForm = new FormGroup({
      tickerSymbol: new FormControl("", [Validators.required]),
      assetClass: new FormControl("", [Validators.required])
    })

     this.commodity={
       commodityId: 0,
       commodityName: '',
       stockSymbol:'',
       type:'',
       uuid: '', 
     }
     
  }


  onSubmit(searchFormValue:any){
    const form = {...searchFormValue };
    this.commodity.type =form.assetClass
    this.commodity.stockSymbol = form.tickerSymbol

    this.assetSearch(this.commodity)
  }

  assetSearch(assetAdd:UserCommodity){
  
  if(assetAdd.type =='Stock')
   {this.isStockSearch=true;

    this._commodityService.userAssetSearch(this.commodity.stockSymbol)
      .pipe(map((resp)=> this.stockDetail= resp))
       .subscribe(item=> this.commodity.commodityName = item.companyName)
      console.log(this.commodity)};

      if(assetAdd.type=="Crypto"){
        this.isCryptoSearch=true;

        this._commodityService.userCryptoSearch(this.commodity.stockSymbol)
        .subscribe(resp=>this.crypto = resp)
        // .pipe(map(resp=>(this.crypto = resp)))
        // .subscribe(_=>console.log(this.crypto))
        }
    } 
    
  addCrypto(name:string, symbol:string, uuid:string){

   this.commodity.commodityName = name
   this.commodity.stockSymbol = symbol
   this.commodity.uuid= uuid

    this._commodityService.addAsset(this.commodity)
    .subscribe(_ => this.doAddToPortfolio = true)
  }

  addStock(){
    this._commodityService.addAsset(this.commodity)
    .subscribe(_ => this.doAddToPortfolio = true)
  }

  addToPortfolio(){

      this._commodityService.getNewlyAddedAsset(this.commodity.commodityName, this.commodity.stockSymbol)
        .subscribe((resp => {this._userService.notifyAboutChange;
          this.router.navigate(['/portfolio'],{queryParams:{Id:resp.commodityId}})}))

     
  
   }

}