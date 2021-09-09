import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { EventBase, SessionBase } from '../../model/event-base';

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
  filterBy:string = 'all';
  sortBy:string = 'default';
  
  ngOnInit(): void {
    //+ will cast the string to number
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    this.route.data.forEach( (data) => {
      //this.event = this.eventService.getEvent(+params['id']);
      //this.eventService.getEvent(+params['id']).subscribe((event:EventBase)=> {
        this.event = data['event'];
        this.addMode = false;
      //})
    })
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

    this.eventService.addSession(this.event).subscribe()

    this.addMode = false
    
  }

  cancelSessionSave(data:any){
    console.log(data)
    this.addMode = data.value
  }

}
