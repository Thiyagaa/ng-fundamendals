import { Component, Input } from '@angular/core';
import { EventBase } from 'src/app/model/event-base';

@Component({
	selector: 'app-event-thumbnail',
	templateUrl: './event-thumbnail.component.html',
	styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {


	@Input() event:EventBase = {} as unknown as EventBase;

	/*
	//passing data between components
	
	@Output() eventEmitter = new EventEmitter();

	handleClickEvent =	() =>{
			this.eventEmitter.emit(this.event.name)
			console.log("Clicked !!!!")
	}

	*/

	/*
	//passing data between components with template variables
	
	someVariable: any = "variable 'someVariable' accessed"
	fooHandler = () => {console.log("foo")}
	
	*/

	getEventTypeStyles():{leisure:boolean,bold:boolean}{
		const isLeisure =	this.event?.eventType === 'Leisure';
		return {leisure:isLeisure,bold:isLeisure};
	}

	getEventTypeClassAsString():string{
		if(this.event?.eventType === 'Educational'){
			return 'educational bold';
		}
		return '';
	}

	getEventTypeClassAsStringArray():string[]{
		if(this.event?.eventType === 'Educational'){
			return ['educational','bold'];
		}
		return [];
	}
}
