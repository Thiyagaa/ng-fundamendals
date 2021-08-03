import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ActivatedRoute } from '@angular/router';
import { SessionBase } from '../model/event-base';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private eventService: EventService,private route:ActivatedRoute) { 
    this.addMode = false
  }
  
  event : any
  addMode: boolean 
  
  ngOnInit(): void {
    //+ will cast the string to number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession(){
    this.addMode = true
  }

  isAddMode(){
    return this.addMode;
  }

  saveNewSession(session:SessionBase){
    console.log("Session "+session)
    let sessionId = 0;
    if(this.event?.itenary){
      sessionId = Math.max(0,this.event?.itenary.map((s: { id: number; })=> s.id))+1
      session.id= sessionId
    } else {
      sessionId = 1
      this.event.itenary = []
    }
    
    this.event.itenary.push(session)

    this.eventService.updateEvent(this.event)

    this.addMode = false
    
  }

  cancelSessionSave(data:any){
    console.log(data)
    this.addMode = data.value
  }

}
