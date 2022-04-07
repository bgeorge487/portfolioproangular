import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUri: string = "";
  private user: any;
  

  getUserList() {
    return this.http.get(this.apiUri);
  }

  createUser(user: Object) : Observable<Object> {
    return this.http.post(`${this.apiUri}`, user);        
  }

  deleteUser(id: number) {
    /* BESURE TO UPDATE TO THE APPROPRIATE URL FORMAT IF NECESSARY*/
    this.http.delete(`${this.apiUri}/api/user/${id}`).subscribe(
      (response) => {this.user = response}
    )
  }

  editUser(id: number, value: any): Observable<Object> {

    /* BESURE TO UPDATE TO THE APPROPRIATE URL FORMAT IF NECESSARY*/
    return this.http.put(`${this.apiUri}/user/${id}`, value)
  }

  addCommodity() {

  }

}


/* this.http.put(`${this.apiUri}/api/user/${this.id}`,
    JSON.stringify({
      body: '',
      title: ''
    })
    ).subscribe(
      (response) => {this.user = response}
    ) */

    /* this.http.post(
      `${this.apiUri}/api/user`,
      JSON.stringify({
        body: 'id',
        title: ''
      })
    ).subscribe(
      (response) => {this.user = response}
    ) */