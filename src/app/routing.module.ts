import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
//import { EventRouteActivator } from './service/event-route-activator.service';
import { EventListResolverService } from './service/event-list-resolver.service';
import { CreateSessionComponent } from './session/create-session/create-session.component';
import { EventresolverService } from './event/eventresolver.service';
import { CreateEventComponent } from './event/create-event/create-event.component';

export const appRoutes: Routes = [
	{ path: 'events', component: EventListComponent,resolve:{ events : EventListResolverService} },
	{ path: '404', component: NotfoundComponent },
	{ path: 'events/session/new', component: CreateSessionComponent },
	{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
	{ path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventresolverService} },
	{ path: '',redirectTo:'/events',pathMatch:'full'},
	{ path: 'user' ,loadChildren : () => import('./user/user.module').then(m=> m.UserModule)}
];


@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { 

}
