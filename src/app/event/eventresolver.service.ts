import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventService } from 'src/app/service/event.service';

@Injectable({
	providedIn: 'root'
})
export class EventresolverService implements Resolve<any>{

	constructor(private eventService:EventService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.eventService.getEvent(+route.params['id']);
		//throw new Error('Method not implemented.');
	}
}
