import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/interfaces/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  title: string = 'User Information';
  private apiUri: string = "";
  private user: any;

  

  getUserList(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.apiUri);
  }

  createUser(user: UserInterface) : Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.apiUri}`, user);        
  }

  deleteUser(id: number) : Observable<UserInterface> {
    /* BESURE TO UPDATE TO THE APPROPRIATE URL FORMAT IF NECESSARY*/
    return this.http.delete<UserInterface>(`${this.apiUri}/api/user/${id}`);
  }

  editUser(user: UserInterface): Observable<UserInterface>{
    return this.http.put<UserInterface>(this.apiUri, user);
  }  

  

}


