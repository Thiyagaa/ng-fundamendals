import { TestBed } from '@angular/core/testing';

import { EventRouteActivator } from './event-route-activator.service';

describe('EventRouteActivatorService', () => {
  let service: EventRouteActivator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventRouteActivator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
