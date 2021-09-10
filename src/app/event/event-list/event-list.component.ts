import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Toastr, TOASTR_TOKEN } from '../../service/toastr.service';

@Component({
	templateUrl: './event-list.component.html',
	styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

	constructor(private eventService:EventService,@Inject(TOASTR_TOKEN) private toastr:Toastr,private route:ActivatedRoute) { }
  @Input() eventlist:any
  ngOnInit(): void {
    
  	this.eventlist= this.route.snapshot.data['events'];
  	// this below line is not needed as we have the resolver taking care of this issue 
  	//this.eventService.getEvents().subscribe(events => {this.eventlist = events});
  	//console.log(JSON.stringify(this.eventlist))
  }
  
  handleEventClickEvent(eventName:string){
  	this.toastr.success(eventName);
  }

/*

  //passing data between components
  
  handleChildClick (data: any){
      console.log("Received "+data)
  }
*/  
}
