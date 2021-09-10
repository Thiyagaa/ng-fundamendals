import { Component, Input, OnChanges } from '@angular/core';
import { SessionBase } from 'src/app/model/event-base';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from 'src/app/service/voter.service';

@Component({
	selector: 'app-session-list',
	templateUrl: './session-list.component.html',
	styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

	@Input() sessions :SessionBase[]|undefined ;
	@Input() filterBy!:string;
	@Input() sortBy!: string;
	@Input() eventId = 0;

	visibleSessions:SessionBase[] = [];
	constructor(private auth:AuthService,private voterService:VoterService) { }
	ngOnChanges(): void {
		if(this.sessions){
			this.filterSessions(this.filterBy);
			this.sortSessions(this.sortBy);
		}
	}
	sortSessions(sortBy: string):void {
		if(sortBy === 'name'){
			this.visibleSessions.sort((a,b)=>	 (a.title > b.title ? -1 : 1));
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
				}	else if (!a.voters && b.voters) {
					return -1;
				} else {
					return 0;
				}
			});
		}
	}

	filterSessions(filter: string):void {
		if(this.sessions){
			if(filter!=='all'){
				this.visibleSessions = (<SessionBase[]>this.sessions).filter( session => {
					return session.level.toLowerCase() === filter;
				});
			}else{
				this.visibleSessions = this.sessions.slice(0);
			}
		}
	}

	
	faFire = faFireAlt;

	toggleVote(session: SessionBase):void{
		if(session.voters && this.userHasVoted(session)){
			this.voterService.deleteVoter(this.eventId,session,this.auth.loggedOnUser?.userName);
		}else{
			this.voterService.addVoter(this.eventId,session,this.auth.loggedOnUser?.userName);
		}
	}

	userHasVoted(session: SessionBase):boolean {
		return this.voterService.userHasVoted(session,this.auth.loggedOnUser?.userName);
	}
}


