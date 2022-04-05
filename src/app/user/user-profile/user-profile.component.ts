import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private repo: UserService) { }

  userList: any; 

  ngOnInit(): void {
    this.repo.getUserList().subscribe(
      (response) => {this.userList = response;}
    )
  }

}
