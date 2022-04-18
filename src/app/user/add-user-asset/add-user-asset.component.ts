import { Component, OnInit } from '@angular/core';
import { CommodityService } from 'src/app/commodity/commodity.service';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserCommodity } from 'src/app/shared/interfaces/commodity-interfaces/user-commodity';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  userCommodity: UserCommodity[] =[];
  showMatch?:Boolean
  commodity?:UserCommodity;



  
  constructor(private formBuilder:FormBuilder, private _authService: AuthService, private _commodityService:CommodityService, private _userService:UserService,private _router:Router, private route:ActivatedRoute) {
    this._authService.currentUser.subscribe(resp => this.currentUser = resp);

      this.changeForm=this.formBuilder.group({
      newTotal: ['', [Validators.required]]
    })
    this.tickerForm =this.formBuilder.group({
      ticker: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(7)]],
    })


  }




  ngOnInit(): void {
    // this.qId = this.route.snapshot.queryParamMap.get('Id')||'';  ///can switch on this to ahve two diffienert forms
    
   const resolvedData = this.route.snapshot.data['resolvedCommodity'] ||'';
   console.log(resolvedData)
  

   this.commodity = resolvedData;

    this.change={
     changeTime: new Date(),
     changeAmount : 2,  ///need to fix
     totalAmount: 0,
     commodityId: 0,
     userId: ''
     }

     if(this.commodity){
      this.tickerForm.setValue({ticker:this.commodity.stockSymbol});
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
this.change.commodityId= this.commodity?.commodityId  // have to create opotion fro fresh form
this.change.userId=this.currentUser.id

this._userService.postChange(this.change)
.subscribe(resp =>{this._router.navigate(['/user-profile']);
                   this._userService.notifyAboutChange;})
}

addPortfolio(id:any){
  this.qId=id;

}

}

