import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map, tap } from 'rxjs/operators';
import { SessionBase } from '../model/event-base';
import { UserBase } from '../model/user-base';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  userHasVoted(session: SessionBase, username: string) {
    return session.voters?.some(voter => voter === username)
  }

  addVoter(eventId:number,session: SessionBase, username: string) {
    
    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    let options = {headers: new HttpHeaders({"Content-Type":"application/json"})};
    this.httpClient.post(url,{},options)
        .pipe(tap((data: any)=>{
            data = <UserBase>data;
            if(data.voters?.some((voter: string) => voter === username)){
              session.voters.push(username)
            }
        }))
        .pipe(catchError(this.handleError<SessionBase>('addVoter'))).subscribe()
  }

  deleteVoter(eventId:number,session: SessionBase, username: string){

    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    let options = { headers: new HttpHeaders({"Content-Type":"application/json"}) };

    this.httpClient.delete(url,options)
        .pipe(map((data: any)=>{
            data = <UserBase>data;
            if(data.voters && !data.voters.some((voter: string) => voter === username)){
              session.voters = data.voters;
            }
        }))
        .pipe(catchError(this.handleError<SessionBase>('deleteVoter'))).subscribe();
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
