import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionBase } from '../model/event-base';
import { EventService } from '../service/event.service';
import { AuthService } from '../user/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	searchTerm = ''
	foundSessions:SessionBase[]=[] 

	constructor(private authService: AuthService,private eventService:EventService, private router:Router) { }


	getCurrentUser():string|undefined{
		return this.authService.loggedOnUser?.firstName;
	}

	isAuthenticated():boolean{
		return this.authService.isAuthenticated();
	}

	searchSession (param:string):unknown{
		
		
		return this.eventService.findSessionsByNameContaining(param).subscribe(
			session=>{
				this.foundSessions = session;
				//console.log(this.foundSessions);
			});
	}

	routeToEvent(path:string,resourceId:string):void{
		this.router.navigate([path,resourceId]);
	} 
}
