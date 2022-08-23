import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListResolver } from './events/events-list-resolver';
import { EventsListComponent } from './events/events-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { EventService } from './events/shared/event.service';
import { AuthService } from './events/user/auth.service';
import { NavBarComponent } from './nav/navbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EventService,EventRouteActivator,EventsListResolver,AuthService,
    {

      provide: 'canDeactivateCreateEvent',

      useValue: checkDirtyState



  }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 

  export function checkDirtyState(component:CreateEventComponent) {

    if (component.isDirty)

      return window.confirm('You have not saved this event, do you really want to cancel?')

    return true

  }
