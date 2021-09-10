import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const userRoutes: Routes =[
	{ path: 'profile', component: ProfileComponent},
	{ path: 'login', component: LoginComponent},
];

@NgModule({
	imports: [CommonModule,RouterModule.forChild(userRoutes)],
	exports: [RouterModule]
})
export class UserRoutingModule { }

