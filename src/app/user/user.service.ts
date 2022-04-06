import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUri: string = "";
  private user: any;
  private id: number | undefined;

  getUserList() {
    return this.http.get(this.apiUri);
  }

  createUser(user: UserInterface) {
    this.http.post(
      `${this.apiUri}/api/user`,
      JSON.stringify({
        body: 'id',
        title: ''
      })
    ).subscribe(
      (response) => {this.user = response}
    )
  }

  deleteUser() {
    this.http.delete(`${this.apiUri}/api/user/${this.id}`).subscribe(
      (response) => {this.user = response}
    )
  }

  editUser() {
    this.http.put(`${this.apiUri}/api/user/${this.id}`,
    JSON.stringify({
      body: '',
      title: ''
    })
    ).subscribe(
      (response) => {this.user = response}
    )
  }
}
