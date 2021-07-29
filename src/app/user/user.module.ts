import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';  
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
  ],
  providers:[

  ]
})
export class UserModule { }
