import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { EventRouteActivator } from './service/event-route-activator.service';
import { EventListResolverService } from './service/event-list-resolver.service';
import { CreateSessionComponent } from './event/create-session/create-session.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponent,resolve:{ events : EventListResolverService} },
  { path: '404', component: NotfoundComponent },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent,canActivate : [EventRouteActivator] },
  { path: '',redirectTo:'/events',pathMatch:'full'},
  { path: 'user' ,loadChildren : () => import('./user/user.module').then(m=> m.UserModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
