import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { AuthService } from '../user/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = ''
  foundSessions:any=[] 

  constructor(private authService: AuthService,private eventService:EventService, private router:Router) { }

  ngOnInit(): void {
  }

  getCurrentUser(){
  	return this.authService.loggedOnUser?.firstName;
  }

  isAuthenticated(){
  	return this.authService.isAuthenticated();
  }

  searchSession (param:string){
    
    
  	return this.eventService.findSessionsByNameContaining(param).subscribe(
  		session=>{
  			this.foundSessions = session;
  			//console.log(this.foundSessions);
  		});
  }

  routeToEvent(path:string,resourceId:string){
  	this.router.navigate([path,resourceId]);
  } 
}
