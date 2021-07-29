import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes: Routes =[
  { path: 'profile', component: ProfileComponent},
]

@NgModule({
  imports: [CommonModule,RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

