import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
