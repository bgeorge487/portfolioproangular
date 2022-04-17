import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/commodity/commodity.service';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserCommodity } from 'src/app/shared/interfaces/commodity-interfaces/user-commodity';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserChange } from 'src/app/shared/interfaces/user-interfaces/user-change';
import { AuthService } from 'src/app/auth/auth.service';
import { map, Observable } from 'rxjs';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { ChangeDto } from 'src/app/shared/interfaces/user-interfaces/change-dto';

@Component({
  selector: 'app-add-user-asset',
  templateUrl: './add-user-asset.component.html',
  styleUrls: ['./add-user-asset.component.css']
})
export class AddUserAssetComponent implements OnInit {

  changeForm!:FormGroup;
  tickerForm!:FormGroup;
  change!: ChangeDto
  qId: string ='';
  currentUser!:AuthResponseDto;
  name?:string;
  symbol?:string;
  userCommodity: UserCommodity[] =[];
  showMatch?:Boolean
  
  // showForm:boolean;
  
  constructor(private _authService: AuthService, private _commodityService:CommodityService, private _userService:UserService,private _router:Router, private route:ActivatedRoute) {
    this._authService.currentUser.subscribe(resp => this.currentUser = resp);
  }

  ngOnInit(): void {
    this.qId = this.route.snapshot.queryParamMap.get('Id')||'';  ///can switch on this to ahve two diffienert forms

  if (this.qId===''){
    this.tickerForm = new FormGroup({
      ticker: new FormControl("",[Validators.required])
    })}
    else{
      this._commodityService.getCommodityById(+this.qId)
      .subscribe(resp=>{this.name=resp.commodityName;
                       this.symbol=resp.stockSymbol})
    } 
      this.changeForm = new FormGroup({
      newTotal: new FormControl("", [Validators.required]),
    })

    this.change={
     changeTime: new Date(),
     changeAmount : 2,  ///need to fix
    totalAmount: 0,
     commodityId: 0,
     userId: ''
     }

}

tickerSubmit(tickerValue:any){
  const tickerSubmit ={...tickerValue};
  this._commodityService.getCommodityByTicker(tickerSubmit.ticker)
    .subscribe(resp=> {this.userCommodity =resp;
                       this.showMatch=true})  
}

onSubmit(newTotalValue:any){
const newTotal ={...newTotalValue} 
this.change.totalAmount=newTotal.newTotal
this.change.commodityId= +this.qId   // have to create opotion fro fresh form
this.change.userId=this.currentUser.id

this._userService.postChange(this.change)
.subscribe(resp =>{this._router.navigate(['/user-profile']);
                   this._userService.notifyAboutChange;})
}

addPortfolio(id:any){
  this.qId=id;

}

}

