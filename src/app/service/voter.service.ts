import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SessionBase } from '../model/event-base';


@Injectable({
	providedIn: 'root'
})
export class VoterService {
	userHasVoted(session: SessionBase, username: string) :boolean{
		return session.voters?.some(voter => voter === username);
	}

	addVoter(eventId:number,session: SessionBase, username: string):void {
    
		const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
		const options = {headers: new HttpHeaders({'Content-Type':'application/json'})};
		this.httpClient.post(url,{},options)
			.pipe(tap((data: unknown)=>{
				if((<SessionBase>data).voters?.some((voter: string) => voter === username)){
					session.voters.push(username);
				}
			}))
			.pipe(catchError(this.handleError<SessionBase>('addVoter'))).subscribe();
	}

	deleteVoter(eventId:number,session: SessionBase, username: string):void{

		const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
		const options = { headers: new HttpHeaders({'Content-Type':'application/json'}) };

		this.httpClient.delete(url,options)
			.pipe(map((data:unknown)=>{
				
				if((<SessionBase>data).voters && !(<SessionBase>data).voters.some((voter: string) => voter === username)){
					session.voters = (<SessionBase>data).voters;
				}
			}))
			.pipe(catchError(this.handleError<SessionBase>('deleteVoter'))).subscribe();
	}

	private handleError<T>(operation = 'operation',result?:T ){
		return (error:unknown) : Observable<T> => {
			console.error(operation+'  '+error);
			return of(result as T);
		};
	}

	constructor(private httpClient:HttpClient) {

	}
}
