import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EventBase } from '../model/event-base';
@Injectable({
	providedIn: 'root'
})
export class EventListResolverService implements Resolve<unknown> {

	constructor(private eventService:EventService) { }
	resolve():Observable<EventBase[]>  {
		console.log('resolver callled');
		//return this.eventService.getEvents().pipe(map(events => events))
		return this.eventService.getEvents();
    
	}
}
