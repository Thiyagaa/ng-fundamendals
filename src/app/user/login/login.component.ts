import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string=''
  password:string=''
  mouseOverLogin:boolean= false
  loginValid:boolean = true;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(values: any){
    this.authService.loginUser(values.userName,values.password).subscribe(
      data => {
        if(data['success']){
          this.loginValid= true;
          this.router.navigate(['/events'])
        }else{
          this.loginValid= false;
        }
      }
    )
  }

  cancel(){
    this.router.navigate(['/events'])
  }
  stringify(value:any){
    console.log(JSON.stringify(value));
  }
}
