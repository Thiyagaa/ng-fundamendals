import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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

        TestBed.configureTestingModule({
            declarations: [ SessionListComponent ],
            providers : [
                {provide :AuthService,useValue: mockAuthService},
                {provide :VoterService,useValue: mockVoterService}  
            ]
        })

    })

    describe('initial display',()=>{

    })
});
