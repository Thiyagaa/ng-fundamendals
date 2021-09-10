import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of,Observable } from 'rxjs';
import { SessionBase } from '../model/event-base';

import { VoterService } from './voter.service';

describe('VoterService', () => {
	let voterService: VoterService,mockHttp: any ;
  
	beforeEach(()=>{
		mockHttp = jasmine.createSpyObj('mockHttp', ['delete','post']);
		voterService = new VoterService(mockHttp) ;
	});

	it('Should remove voter from the list',()=>{
		const session = { id: 6, voters:['user1','user2']};
    
		const successResponse =  { id: 6, voters:['user2']};
    
		mockHttp.delete.and.returnValue(of(successResponse));

		voterService.deleteVoter(3,<SessionBase>session,'user1');

		expect(session.voters[0]).toEqual('user2');
	});

	it('Should not remove voter from the list when the client is not able to connect to the server',()=>{
		const session = { id: 6, voters:['user1','user2']};
    
		const failureResponse =  { 
			headers: {}, 
			status: 504, 
			statusText: 'Gateway Timeout', 
			url: 'http://localhost:4200/api/events/9', 
			ok: false, 
			name: 'HttpErrorResponse', 
			message: 'Http failure response for http://localhost:4200/api/events/9: 504 Gateway Timeout', 
			error: 'Error occured while trying to proxy to: localhost:4200/api/events/9' 
		};
    
		mockHttp.delete.and.returnValue(of(failureResponse));

		voterService.deleteVoter(3,<SessionBase>session,'user1');
    
		expect(session.voters).toEqual(['user1','user2']);
	});


	it('Should add voter to list when successfull response is returned',()=>{
		const session = { id: 6, voters:['user1','user2']};
    
		const successResponse =  { id: 6, voters:['user1','user2','user3']};
    
		mockHttp.post.and.returnValue(of(successResponse));

		voterService.addVoter(3,<SessionBase>session,'user3');

		expect(session.voters.length).toBe(3);
	});

	it('Should not add voter to the list when the client is not able to connect to the server',()=>{
		const session = { id: 6, voters:['user1','user2']};
    
		const failureResponse =  { 
			headers: {}, 
			status: 504, 
			statusText: 'Gateway Timeout', 
			url: 'http://localhost:4200/api/events/9', 
			ok: false, 
			name: 'HttpErrorResponse', 
			message: 'Http failure response for http://localhost:4200/api/events/9: 504 Gateway Timeout', 
			error: 'Error occured while trying to proxy to: localhost:4200/api/events/9' 
		};
    
		mockHttp.post.and.returnValue(of(failureResponse));

		voterService.addVoter(3,<SessionBase>session,'user1');
    
		expect(session.voters.length).toEqual(2);
		expect(session.voters).toEqual(['user1','user2']);
	});

	it('Has user voted should return true when user has voted',()=>{
		const session = { id: 6, voters:['user1','user2']};
		expect(voterService.userHasVoted(<SessionBase>session,'user1')).toBe(true);
	});

	it('Has user voted should return false when user has not voted',()=>{
		const session = { id: 6, voters:['user1','user2']};
		expect(voterService.userHasVoted(<SessionBase>session,'user3')).toBe(false);
	});

});
