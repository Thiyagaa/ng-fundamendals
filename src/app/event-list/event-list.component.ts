import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ToastrService } from '../service/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService:EventService,private toastr:ToastrService) { }
  @Input() eventlist:any
  ngOnInit(): void {
    this.eventlist = this.eventService.getEvents();
  }
  
  handleEventClickEvent(eventName:string){
    this.toastr.success(eventName)
  }

/*

  //passing data between components
  
  handleChildClick (data: any){
      console.log("Received "+data)
  }
*/  
}
