import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserBase } from '../model/user-base';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	logout():Observable<unknown> {
		this.loggedOnUser = {} as unknown as UserBase;

		const options = {headers: new HttpHeaders({'Content-Type':'application/json'})};
		return this.httpClient.post('/api/logout',{},options);
	}
	checkAuthenticationStatus(): void {
		this.httpClient.get('/api/currentIdentity').pipe(
			tap(
				data => {
					if(data instanceof Object){
						console.log(JSON.stringify(data));
						this.loggedOnUser = <UserBase>data;
					}
				}
			)
		).subscribe();
	}

	loggedOnUser:UserBase = {} as unknown as UserBase;

	constructor(private httpClient:HttpClient) { }

	loginUser(userName:string,password:string):Observable<unknown>{
		const loginInfo = {username: userName, password: password};
		const options = {headers: new HttpHeaders({'Content-Type':'application/json'})};
		return this.httpClient.post('/api/login',loginInfo,options)
			.pipe(tap(data=>{
				this.loggedOnUser = <UserBase>(<{[key:string]:unknown}>data)['user'];
				this.loggedOnUser.lastName = 'LastName';
				this.loggedOnUser.firstName = this.loggedOnUser.userName;
				console.log(this.loggedOnUser);
			}))
			.pipe(catchError(this.handleError<{[key:string]:unknown}>('login')));
			
		// this.loggedOnUser= {
		//	 id:1,
		//	 firstName:"Thiyagarajan",
		//	 lastName:"Annamalai",
		//	 username:"Thiyagaa",
		//	 password: ''
		// }
	}
	private handleError<T>(operation = 'operation',result?:T ){
		console.log('Exception occrred '+ operation+ ' response ' + result);
		return (error:unknown) : Observable<T> => {
			console.error(error);
			return of(error as T);
		};
	}

	isAuthenticated():boolean{
		return !!this.loggedOnUser.id;
	}

	updateUser(values: { lastName: string; firstName: string; }):Observable<unknown>{
		this.loggedOnUser.firstName = values.firstName;
		this.loggedOnUser.lastName = values.lastName;
		const options = {headers: new HttpHeaders({'Content-Type':'application/json'})};
		return this.httpClient.put(`/api/users/${this.loggedOnUser.id}`,this.loggedOnUser,options)
			.pipe(catchError(this.handleError('updateUser')));
	}
}
