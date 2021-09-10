import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
	selector: 'app-event-thumbnail',
	templateUrl: './event-thumbnail.component.html',
	styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
  @Input() event:any

  /*
  //passing data between components
  
  @Output() eventEmitter = new EventEmitter();

  handleClickEvent =  () =>{
      this.eventEmitter.emit(this.event.name)
      console.log("Clicked !!!!")
  }

  */

  /*
  //passing data between components with template variables
  
  someVariable: any = "variable 'someVariable' accessed"
  fooHandler = () => {console.log("foo")}
  
  */

  getEventTypeStyles(){
  	const isLeisure =  this.event?.eventType === 'Leisure';
  	return {leisure:isLeisure,bold:isLeisure};
  }

  getEventTypeClassAsString(){
  	if(this.event?.eventType === 'Educational'){
  		return 'educational bold';
  	}
  	return '';
  }

  getEventTypeClassAsStringArray(){
  	if(this.event?.eventType === 'Educational'){
  		return ['educational','bold'];
  	}
  	return [];
  }
}
