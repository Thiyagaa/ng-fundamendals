import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import {map} from 'rxjs/operators'
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService:EventService) { }
  resolve():Observable<any> {
    return this.eventService.getEvents().pipe(map(events => events))
  }
}
