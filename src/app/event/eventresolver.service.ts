import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventBase } from '../model/event-base';
import { EventService } from '../service/event.service';

@Injectable({
	providedIn: 'root'
})
export class EventresolverService implements Resolve<unknown>{

	constructor(private eventService:EventService) { }
	resolve(route: ActivatedRouteSnapshot):Observable<EventBase> {
		return this.eventService.getEvent(+route.params['id']);
		//throw new Error('Method not implemented.');
	}
}
