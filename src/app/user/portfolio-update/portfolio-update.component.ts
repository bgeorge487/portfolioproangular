import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { asyncScheduler } from 'rxjs/internal/scheduler/async';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { ChangeDto } from 'src/app/shared/interfaces/user-interfaces/change-dto';
import { UserChange } from 'src/app/shared/interfaces/user-interfaces/user-change';
import { UserService } from '../user.service';

@Component({
  selector: 'app-portfolio-update',
  templateUrl: './portfolio-update.component.html',
  styleUrls: ['./portfolio-update.component.css']
})
export class PortfolioUpdateComponent implements OnInit {

  currentUser!: AuthResponseDto;
  paramId:any;
  changeHistory: UserChange[] =[];
  updateForm!:FormGroup;
  update!: ChangeDto;
  reveal:boolean=false;
  mostRecent!: UserChange

  constructor(public _authService:AuthService, private _userService:UserService, private route:ActivatedRoute,private _router:Router, ) { 
    
    this._authService.currentUser.subscribe(resp => this.currentUser = resp);
    this.paramId = route.snapshot.paramMap.get('id') || ''
}

  ngOnInit(): void {
   this.getDetails(this.currentUser.id,+this.paramId);
   
   this.updateForm = new FormGroup({
    newTotal: new FormControl("", [Validators.required])

    
  })
  }
  

  getDetails(uId:string,cId:number)
  {

    this._userService.getUserCommodityDetail(uId,cId)
       .subscribe(resp=> this.changeHistory = resp)

  }

  onClick=()=>{
    this.reveal=true;

  }

  subUpdate(changeFormValue:any){
  
  const newTotal ={...changeFormValue} 
  this.update.totalAmount=newTotal.newTotal
  this.update.changeAmount= newTotal.newTotal -this.mostRecent.totalAmount
  this.update.commodityId= +this.paramId  
  this.update.userId=this.currentUser.id

  this._userService.postChange(this.update)
.subscribe(resp =>{this._router.navigate(['/user-profile']);
                   this._userService.notifyAboutChange;})
  }
}
