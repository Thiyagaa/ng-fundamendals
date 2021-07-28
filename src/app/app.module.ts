import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './service/event.service';
import { ToastrService } from './service/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { EventRouteActivator } from './service/event-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent',useValue : checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component : CreateEventComponent){
  if(component.isDirty){
    return window.confirm('There are unsaved changes, do you want to proceed?')
  }
  return true;
}