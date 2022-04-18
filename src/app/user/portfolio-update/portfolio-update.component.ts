import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponseDto } from 'src/app/shared/interfaces/auth-interfaces/login-models/auth-response-dto';
import { UserCommodity } from 'src/app/shared/interfaces/commodity-interfaces/user-commodity';
import { UserCommodityResolved } from 'src/app/shared/interfaces/commodity-interfaces/user-commodity-resolved';
import { ChangeDto } from 'src/app/shared/interfaces/user-interfaces/change-dto';
import { UserChange } from 'src/app/shared/interfaces/user-interfaces/user-change';
import { UserChangesResolved } from 'src/app/shared/interfaces/user-interfaces/user-changes-resolverd';
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

  constructor(public _authService:AuthService, private _userService:UserService, private route:ActivatedRoute,private _router:Router, private formBuilder:FormBuilder) { 
    
    // this._authService.currentUser.subscribe(resp => this.currentUser = resp);
    this.updateForm=this.formBuilder.group({
      updateTotal: ['', [Validators.required]]
    })
    
}

  ngOnInit(): void {
    
    const resolvedChanges:UserChangesResolved = this.route.snapshot.data['resolvedChanges']
     
    this.changeHistory=resolvedChanges.userChangeArray
   
    
    console.log(this.changeHistory)

    this.setDetails(this.changeHistory)  //null check for usercommodity
    
  }
  
  setDetails(changeHistory:UserChange[])
  {
   this.mostRecent=this.changeHistory[0]
  }

  onClick=()=>{
    this.reveal=true;
    
  }

  subUpdate(updateFormValue:any){
  
  const total = {...updateFormValue} 
   
  const change:ChangeDto={
    changeTime: new Date(),
    totalAmount:total.updateTotal,
    changeAmount: (total.updateTotal - this.mostRecent.totalAmount),
    commodityId: this.mostRecent.commodityId,
    userId:this.mostRecent.userId
  }
  
  this._userService.postChange(change)
    .subscribe(resp =>{this._userService.notifyAboutChange();
                      this._router.navigate(['/user-profile'])})
  }
}
