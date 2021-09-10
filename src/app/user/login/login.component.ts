import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	userName=''
	password=''
	mouseOverLogin= false
	loginValid = true;
	constructor(private authService:AuthService, private router:Router) { }

	login(values: {userName:string,password:string}):void{
		this.authService.loginUser(values.userName,values.password).subscribe(
			(data:unknown) => {
				if((<{[key:string]:unknown}>data)['success']){
					this.loginValid= true;
					this.router.navigate(['/events']);
				}else{
					this.loginValid= false;
				}
			}
		);
	}

	cancel():void{
		this.router.navigate(['/events']);
	}
	stringify(value:unknown):void{
		console.log(JSON.stringify(value));
	}
}
