import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserBase } from '../model/user-base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    this.loggedOnUser = {} as unknown as UserBase;

    let options = {headers: new HttpHeaders({"Content-Type":"application/json"})};
      return this.httpClient.post('/api/logout',{},options);
  }
  checkAuthenticationStatus() {
    this.httpClient.get('/api/currentIdentity').pipe(
      tap(
        data => {
            if(data instanceof Object){
              console.log(JSON.stringify(data))
              this.loggedOnUser = <UserBase>data;
            }
        }
      )
    ).subscribe()
  }

  loggedOnUser:UserBase = {} as unknown as UserBase;

  constructor(private httpClient:HttpClient) { }

  loginUser(userName:string,password:string):Observable<any>{
      let loginInfo = {username: userName, password: password}
      let options = {headers: new HttpHeaders({"Content-Type":"application/json"})};
      return this.httpClient.post('/api/login',loginInfo,options)
      .pipe(tap(data=>{
            this.loggedOnUser = <UserBase>(<{[key:string]:any}>data)['user'];
          //console.log(this.loggedOnUser)
            this.loggedOnUser.lastName = "LastName";
            this.loggedOnUser.firstName = this.loggedOnUser.userName;
            console.log(this.loggedOnUser)
      }))
      .pipe(catchError(this.handleError<{[key:string]:any}>('login')))
      
      // this.loggedOnUser= {
      //   id:1,
      //   firstName:"Thiyagarajan",
      //   lastName:"Annamalai",
      //   username:"Thiyagaa",
      //   password: ''
      // }
  }
  private handleError<T>(operation = 'operation',result?:T ){
      return (error:any) : Observable<T> => {
        console.error(error)
        return of(error as T)
      }
  }

  isAuthenticated(){
    return !!this.loggedOnUser
  }

  updateUser(values: { lastName: string; firstName: string; }):Observable<any>{
      this.loggedOnUser.firstName = values.firstName;
      this.loggedOnUser.lastName = values.lastName;
      let options = {headers: new HttpHeaders({"Content-Type":"application/json"})};
      return this.httpClient.put(`/api/users/${this.loggedOnUser.id}`,this.loggedOnUser,options)
        .pipe(catchError(this.handleError("updateUser")))
  }
}
