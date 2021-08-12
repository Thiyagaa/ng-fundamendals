import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SessionBase } from 'src/app/model/event-base';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit,OnChanges {

  @Input() sessions!:SessionBase[];
  @Input() filterBy!:string;
  @Input() sortBy!: string;

  visibleSessions:SessionBase[] = [];
  constructor() { }
  ngOnChanges(): void {
    if(this.sessions){
      this.filterSessions(this.filterBy)
      this.sortSessions(this.sortBy)
    }
  }
  sortSessions(sortBy: string) {
    if(sortBy === 'name'){
      this.visibleSessions.sort((a,b)=>   (a.title > b.title ? -1 : 1))
    } else if (sortBy === 'votes'){
      this.visibleSessions.sort((a,b)=> {
        if((a.voters && b.voters)){
          if(a.voters.length> b.voters.length){
            return 1;
          } else if(a.voters.length < b.voters.length){
            return -1;
          }else {
            return 0;
          }
        } else if (a.voters && !b.voters) {
            return 1;
        }  else if (!a.voters && b.voters) {
            return -1;
        } else {
          return 0;
        }
      })
    }
  }

  filterSessions(filter: string) {
    if(filter!=='all'){
      this.visibleSessions = this.sessions.filter( session => {
        return session.level.toLowerCase() === filter;
      })
    }else{
      this.visibleSessions = this.sessions.slice(0);
    }
  }

  ngOnInit(): void {
  }
  faFire = faFireAlt;

}
