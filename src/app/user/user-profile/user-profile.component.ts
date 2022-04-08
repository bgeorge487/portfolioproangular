import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from 'src/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
@Input() user?: UserInterface;

  constructor(private repo: UserService) { }

  userList: UserInterface[] = [];
  newUser: UserInterface = {
    id: 1,
    userFirstName: 'Brian'
  };

  ngOnInit(): void {
    this.repo.getUserList().subscribe(
      (response) => {this.userList = response;}
    )
  }

  onSubmit() {
    this.repo.createUser(this.newUser).
    subscribe(
      response => {
        this.repo.getUserList();
        this.newUser = {
        id: 1,
        userFirstName: ''
        }
      }
    )
  };

  onDelete(id: number) {
    this.repo.deleteUser(id).subscribe(
      response => {
        this.repo.getUserList();
      }
    )
  }

}
