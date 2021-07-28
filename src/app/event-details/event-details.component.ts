import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private eventService: EventService,private route:ActivatedRoute) { }
  
  event : any
  
  ngOnInit(): void {
    //+ will cast the string to number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
