import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { SessionBase } from '../model/event-base';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  userHasVoted(session: SessionBase, username: string) {
    return session.voters?.some(voter => voter === username)
  }
  // addVoter(session: SessionBase, username: string) {
  //   if(session.voters){
  //     session.voters.push(username)
  //   }else{
  //     session.voters=[]
  //     session.voters.push(username)
  //   }
  // }

  addVoter(eventId:number,session: SessionBase, username: string) {
    if(session.voters){
      session.voters.push(username)
    }else{
      session.voters=[]
      session.voters.push(username)
    }
    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    let options = {headers: new HttpHeaders({"Content-Type":"application/json"})};

    this.httpClient.post(url,{},options)
        .pipe(catchError(this.handleError<SessionBase>('addVoter'))).subscribe()
  }

  // deleteVoter(session: SessionBase, username: string) {
  //   session.voters = session.voters?.filter( s => s !== username )
  // }

  deleteVoter(eventId:number,session: SessionBase, username: string){
    // /api/events/1/sessions/1/voters/name
    session.voters = session.voters?.filter( s => s !== username )

    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    let options = {headers: new HttpHeaders({"Content-Type":"application/json"})};

    this.httpClient.delete(url,options)
        .pipe(catchError(this.handleError<SessionBase>('deleteVoter'))).subscribe()
  }

    private handleError<T>(operation = 'operation',result?:T ){
      return (error:any) : Observable<T> => {
        console.error(error)
        return of(result as T)
      }
  }

  constructor(private httpClient:HttpClient) {

  }
}
