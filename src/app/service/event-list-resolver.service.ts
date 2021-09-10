import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import {map} from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { event } from 'jquery';
import { EventBase } from '../model/event-base';
@Injectable({
	providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

	constructor(private eventService:EventService) { }
	resolve()  {
		console.log('resolver callled');
		//return this.eventService.getEvents().pipe(map(events => events))
		return this.eventService.getEvents();
    
	}
}
