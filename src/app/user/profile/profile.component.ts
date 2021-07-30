import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/service/toastr.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //REFER : https://stackoverflow.com/questions/66563535/type-formgroup-null-is-not-assignable-to-type-formgroup-type-null-is-no
  profileForm!: FormGroup; 

  constructor(private router: Router,private authService:AuthService,private toastr:ToastrService) { }

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.loggedOnUser?.firstName)
    let lastName = new FormControl(this.authService.loggedOnUser?.lastName)
    this.profileForm = new FormGroup({
        firstName:firstName,
        lastName:lastName
    })
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  updateUser(values:any){
    this.authService.updateUser(values)
    this.toastr.success("Updated the profile successfully")
    this.router.navigate(['/events'])
  }

}
