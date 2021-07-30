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
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(values: any){
      this.authService.loginUser(values.userName,values.password)
      this.router.navigate(['/events'])
  }

  cancel(){
    this.router.navigate(['/events'])
  }
  stringify(value:any){
    console.log(JSON.stringify(value));
  }
}
