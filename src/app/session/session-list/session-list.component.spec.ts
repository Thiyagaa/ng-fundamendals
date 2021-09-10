import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionBase } from 'src/app/model/event-base';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent isolated test', () => {
  let component: SessionListComponent;
  let authServiceMock:any,voterServiceMock:any;  

  beforeEach(() => {
    component = new SessionListComponent(authServiceMock,voterServiceMock);
  });

  describe("ngOnChange",()=>{
    it('component should filter and sort properly when ngOnChange is invoked', () => {
        component.sessions = <SessionBase[]>[{title:"Session 2",level:'intermediate'},
                                             {title:"Session 1",level:'beginner'},
                                             {title:"Session 3",level:'advanced'},
                                             {title:"Session 4",level:'intermediate'},
                                            ]

        component.filterBy='intermediate'
        component.sortBy='name'
        component.eventId = 3

        component.ngOnChanges();
        
        expect(component.visibleSessions.length).toBe(2)

    });
  });

});
