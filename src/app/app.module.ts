/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './service/event.service';
import { Toastr, TOASTR_TOKEN } from './service/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { EventRouteActivator } from './service/event-route-activator.service';
import { EventListResolverService } from './service/event-list-resolver.service';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { CreateSessionComponent } from './event/create-session/create-session.component';
import { SessionListComponent } from './event/session-list/session-list.component';
import { CollapsableWellComponent } from './common/collapsable-well/collapsable-well.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from './common/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { JQUERY_TOKEN } from './service/jquery.service.service';
import { ModalTriggerDirective } from './common/directive/modal.trigger.directive';

let $: JQueryStatic = (window as any)["jQuery"];
let toastr: Toastr = (window as any)["toastr"];

//declare let toastr:Toastr;

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotfoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    FontAwesomeModule
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN,useValue:toastr},
    EventRouteActivator,  // ==> same as {provide:EventRouteActivator, useClass:EventRouteActivator},
    {provide: 'canDeactivateCreateEvent',useValue : checkDirtyState},
/*  
    use existing needs the value to be defined separately..
    
    example : EventRouteActivatorNew is a new implementation and i want to override the instance of EventRouteActivator then i will do {provide: EventRouteActivator,useClass : EventRouteActivatorNew}, this will replace the instance of EventRouteActivator with EventRouteActivatorNew in the mapping.

    We have a EventRouteActivatorNew assigned to EventRouteActivator. but if we declare the EventRouteActivatorNew as below.

      {provide: EventRouteActivatorNew,useExisting : EventRouteActivatorNew},

    In the above code, we have defined EventRouteActivatorNew to use existing EventRouteActivatorNew instance.. This will not refer to the EventRouteActivator mapping, hence it will give a compilation error.

    To fix the above compilation error, the declaration has to be modified as below.

      {provide: EventRouteActivatorNew,useClass : EventRouteActivatorNew},

    Note: If there are two instances of a Service Component (EventRouteActivatorNew in the example) availalbe in the providers, this will cause a conflict..

    useFactory:
      the parameter passed on to useFactory is a factory method where the creation occurrs at the runtime, rather than compile time.

      {provide: EventRouteActivatorNew,useFactory : EventRouteActivatorFunction},
    
    */
    EventListResolverService,
    AuthService,
    {provide: JQUERY_TOKEN,useValue:$},
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