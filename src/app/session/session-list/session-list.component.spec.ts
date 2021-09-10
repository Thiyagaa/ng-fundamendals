
import { SessionBase } from '../../model/event-base';
import { VoterService } from '../../service/voter.service';
import { AuthService } from '../../user/auth.service';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent isolated test', () => {
	let component: SessionListComponent;
	let authServiceMock:unknown,voterServiceMock:unknown;  

	beforeEach(() => {
		component = new SessionListComponent(<AuthService>authServiceMock,<VoterService>voterServiceMock);
	});

	describe('ngOnChange',()=>{
		it('component should filter and sort properly when ngOnChange is invoked', () => {
			component.sessions = <SessionBase[]>[{title:'Session 2',level:'intermediate'},
				{title:'Session 1',level:'beginner'},
				{title:'Session 3',level:'advanced'},
				{title:'Session 4',level:'intermediate'},
			];

			component.filterBy='intermediate';
			component.sortBy='name';
			component.eventId = 3;

			component.ngOnChanges();
        
			expect(component.visibleSessions.length).toBe(2);

		});
	});

});
