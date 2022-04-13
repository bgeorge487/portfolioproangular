import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../user.service';
import { FormGroup, FormsModule, NgForm, FormControl, Validators } from '@angular/forms';
import { UserCommodity } from '../user-interfaces/user-commodity';
import { StockDetails } from '../user-interfaces/stock-details';
import { map, tap } from 'rxjs';
import { Coins } from '../user-interfaces/coins';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAsset implements OnInit {
 
  
  searchForm = new FormGroup({
    ticker: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

 confirm!:boolean;
 search!:boolean;
 commodity!:UserCommodity;
 message:any ='';
 stockDetail!: StockDetails
 
 crypto!:Coins[]

  constructor(public _userService:UserService, public _authService:AuthService, private router: Router) { 
  
  }

  ngOnInit(): void { 
     this.commodity={
       commodityId: 0,
       commodityName: '',
       stockSymbol:'',
       type:'',
       uuid:''
     }

  }


  assetSearch(searchFormValue:any){
  const form = {...searchFormValue};
  
  this.commodity.stockSymbol = form.ticker;
  this.commodity.type= form.type;

  if(this.commodity.type=='Stock')
   {this.confirm=true;


    this._userService.userAssetSearch(this.commodity.stockSymbol)
      .pipe(map((resp)=> this.stockDetail= resp))
       .subscribe(item=> this.commodity.commodityName = item.companyName)
      console.log(this.commodity)};

      if(this.commodity.type=='Crypto'){
        this.search=true;
        this._userService.userCryptoSearch(this.commodity.stockSymbol)
        .pipe(map(resp=>(this.crypto = resp)))
        .subscribe(_=>console.log(this.crypto))
        }
    
    }
    
  

  addCrypto(name:string, symbol:string, uuid:string){

   this.commodity.commodityName = name
   this.commodity.stockSymbol = symbol
   this.commodity.uuid= uuid

    this._userService.addAsset(this.commodity)
    .subscribe(_ => this.router.navigate((["profile"])))
  }

  add(){
    this._userService.addAsset(this.commodity)
    .subscribe(item=> {this.message = item.text
    this.confirm=true})
  }

}
