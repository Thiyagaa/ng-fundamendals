import { Component, Input, OnInit } from '@angular/core';
import { SessionBase } from 'src/app/model/event-base';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions!:SessionBase[]
  
  constructor() { }

  ngOnInit(): void {
  }
  faFire = faFireAlt;
}
