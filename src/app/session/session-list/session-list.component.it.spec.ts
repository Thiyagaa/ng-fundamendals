import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationPipe } from 'src/app/common/duration.pipe';
import { SessionBase } from 'src/app/model/event-base';
import { VoterService } from 'src/app/service/voter.service';
import { AuthService } from 'src/app/user/auth.service';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {

    let mockAuthService:AuthService,
        mockVoterService:VoterService,
        fixture:ComponentFixture<SessionListComponent>,
        component:SessionListComponent,
        element:HTMLElement,
        debugElement:DebugElement;

    beforeEach(()=>{
        mockAuthService = <AuthService>{isAuthenticated : () => true}
        mockVoterService = {userHasVoted : () => true} as unknown as VoterService;
        TestBed.configureTestingModule({
            declarations: [ SessionListComponent,DurationPipe ],
            providers : [
                {provide :AuthService,useValue: mockAuthService},
                {provide :VoterService,useValue: mockVoterService}  
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display',()=>{
        it("should have the correct title",()=>{
            component.sessions = <SessionBase[]>[
                                            {
                                                id:1, 
                                                eventId:3,
                                                title:"Session 2",
                                                level:'intermediate',
                                                duration:1,
                                                presenter:'Presenter',
                                                abstract:'Abstract',
                                                voters:['user1','user2']
                                            }
                                        ]
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            
            component.ngOnChanges();

            fixture.detectChanges();
            
            expect(element.querySelector('[well-title]')?.textContent).toContain('Session 2')

            expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 2')
        })
    })
});
