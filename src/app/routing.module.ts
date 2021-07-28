import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { EventRouteActivator } from './service/event-route-activator.service';

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EventDetailsComponent,canActivate : [EventRouteActivator] },
  { path: '',redirectTo:'/events',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
