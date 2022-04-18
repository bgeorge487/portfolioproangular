import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { asyncScheduler } from 'rxjs/internal/scheduler/async';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { UserCommodity } from 'src/app/shared/interfaces/commodity-interfaces/user-commodity';
import { ChangeDto } from 'src/app/shared/interfaces/user-interfaces/change-dto';
import { UserChange } from 'src/app/shared/interfaces/user-interfaces/user-change';
import { UserService } from '../user.service';

@Component({
  selector: 'app-portfolio-update',
  templateUrl: './portfolio-update.component.html',
  styleUrls: ['./portfolio-update.component.css']
})
export class PortfolioUpdateComponent implements OnInit {

  // currentUser!: AuthResponseDto;
 
  changeHistory: UserChange[] =[];
  updateForm!:FormGroup;
  update!: ChangeDto;
  reveal:boolean=false;
  mostRecent!: UserChange
  commodity!:UserCommodity

  constructor(public _authService:AuthService, private _userService:UserService, private route:ActivatedRoute,private _router:Router, ) { 
    
    // this._authService.currentUser.subscribe(resp => this.currentUser = resp);
    
}

  ngOnInit(): void {

    const resolvedData:UserCommodity = this.route.snapshot.data['resolvedCommodity'];
    const resovledChanges:UserChange[] =this.route.snapshot.data['resovledChanges']
    // this.mostRecent= resovledChanges[0];
   
    this.setDetails(resolvedData,resovledChanges )
   this.updateForm = new FormGroup({
    total: new FormControl("", [Validators.required])
    
  })
  }
  
  setDetails(commodity:UserCommodity, changeHistory:UserChange[])
  {
    this.commodity = commodity;
    this.changeHistory= changeHistory;
    this.mostRecent=this.changeHistory[0];
  }

  onClick=()=>{
    this.reveal=true;
  }

  subUpdate(changeFormValue:any){
  
  const total = {...changeFormValue} 
   
  const change:ChangeDto={
    changeTime: new Date(),
    totalAmount:total.total,
    changeAmount: total.total - this.mostRecent.totalAmount,
    commodityId: this.commodity.commodityId,
    userId:this.mostRecent.userId
  }
  
  this._userService.postChange(change)
.subscribe(resp =>{this._router.navigate(['/user-profile']);
                   this._userService.notifyAboutChange;})
  }
}
