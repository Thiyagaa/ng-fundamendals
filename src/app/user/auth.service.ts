import { Injectable } from '@angular/core';
import { UserBase } from '../model/user-base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedOnUser : UserBase | undefined
  constructor() { }

  loginUser(userName:string,password:string){
      this.loggedOnUser= {
        id:1,
        firstName:"Thiyagarajan",
        lastName:"Annamalai",
        username:"Thiyagaa",
        password: ''
      }
  }

  isAuthenticated(){
    return !!this.loggedOnUser
  }
}
