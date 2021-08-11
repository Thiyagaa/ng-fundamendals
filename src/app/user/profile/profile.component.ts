import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/app/service/toastr.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //REFER : https://stackoverflow.com/questions/66563535/type-formgroup-null-is-not-assignable-to-type-formgroup-type-null-is-no
  profileForm!: FormGroup; 
  firstName!: FormControl
  lastName!: FormControl
  
  constructor(private router: Router,private authService:AuthService,@Inject(TOASTR_TOKEN) private toastr:Toastr) { }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.loggedOnUser?.firstName,[Validators.required,Validators.pattern('[A-Za-z0-9].*')])
    this.lastName = new FormControl(this.authService.loggedOnUser?.lastName,[Validators.required,Validators.pattern('[A-Za-z0-9].*')])
    this.profileForm = new FormGroup({
        firstName:this.firstName,
        lastName:this.lastName
    })
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  updateUser(values:any){
    if(this.profileForm.valid){
      this.authService.updateUser(values)
      this.toastr.success("Updated the profile successfully")
      this.router.navigate(['/events'])
    } 
  }

  validate(value : string){
    switch(value){
      case 'firstName':
        return this.firstName.untouched || this.firstName.valid
      case 'lastName':
        return this.lastName.untouched || this.lastName.valid
      default:
        return false;
    }
  }

}
