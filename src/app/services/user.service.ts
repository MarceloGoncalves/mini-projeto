import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { }

  register(user:User){
    return this.httpClient.post(this.url, user);
  }
  list(){
    return this.httpClient.get(this.url);
  }
  
  delete(id:number){
    return this.httpClient.delete(this.url,);
  }
}
