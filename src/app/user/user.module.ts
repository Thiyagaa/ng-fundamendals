import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';  
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // REFER : https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
	declarations: [
		ProfileComponent,
		LoginComponent
	],
	imports: [
		FormsModule,
		DatepickerModule,
		CommonModule,
		UserRoutingModule,
		ReactiveFormsModule
	],
	providers:[

	]
})
export class UserModule { }
