import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SessionBase } from 'src/app/model/event-base';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from 'src/app/service/voter.service';

@Component({
	selector: 'app-session-list',
	templateUrl: './session-list.component.html',
	styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit,OnChanges {

  @Input() sessions!:SessionBase[];
  @Input() filterBy!:string;
  @Input() sortBy!: string;
  @Input() eventId!: number;

  visibleSessions:SessionBase[] = [];
  constructor(private auth:AuthService,private voterService:VoterService) { }
  ngOnChanges(): void {
  	if(this.sessions){
  		this.filterSessions(this.filterBy);
  		this.sortSessions(this.sortBy);
  	}
  }
  sortSessions(sortBy: string) {
  	if(sortBy === 'name'){
  		this.visibleSessions.sort((a,b)=>   (a.title > b.title ? -1 : 1));
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
  		});
  	}
  }

  filterSessions(filter: string) {
  	if(filter!=='all'){
  		this.visibleSessions = this.sessions.filter( session => {
  			return session.level.toLowerCase() === filter;
  		});
  	}else{
  		this.visibleSessions = this.sessions.slice(0);
  	}
  }

  ngOnInit(): void {
  }
  faFire = faFireAlt;

  toggleVote(session: any){
  	if(session.voters && this.userHasVoted(session)){
  		this.voterService.deleteVoter(this.eventId,session,this.auth.loggedOnUser?.userName);
  	}else{
  		this.voterService.addVoter(this.eventId,session,this.auth.loggedOnUser?.userName);
  	}
  }

  userHasVoted(session: any) {
  	return this.voterService.userHasVoted(session,this.auth.loggedOnUser?.userName);
  }
}


