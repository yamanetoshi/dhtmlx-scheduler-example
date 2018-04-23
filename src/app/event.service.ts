import { Injectable } from '@angular/core';
import { Event } from "./event";

@Injectable()
export class EventService {
    
    get(): Promise<Event[]> {
        return Promise.resolve([
            {id: 1, start_date: "2018-04-24 00:00", end_date: "2018-04-24 13:00", text: "Event 1"},
            {id: 2, start_date: "2018-04-26 00:00", end_date: "2018-04-26 13:00", text: "Event 2"},
            ]);
    }

  constructor() { }

}
