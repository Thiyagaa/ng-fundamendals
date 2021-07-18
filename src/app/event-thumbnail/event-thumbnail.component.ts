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

  @Output() eventEmitter = new EventEmitter();

  handleClickEvent =  () =>{
      this.eventEmitter.emit(this.event.name)
      console.log("Clicked !!!!")
  }
}
