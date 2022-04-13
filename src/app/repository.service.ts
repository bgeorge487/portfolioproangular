import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUri:string = "https://localhost:7161/api/";

  constructor(private http: HttpClient) { }

}
