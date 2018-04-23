import { Injectable } from '@angular/core';
import { Event } from "./event";

import { Http } from "@angular/http";
import { ExtractData, HandleError } from "./service-helper";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {
//    private eventUrl = "api/events";
    private eventUrl = "http://event-api-sample-yamanetoshi.c9users.io/events";

    constructor(private http: Http) {}

    get(): Promise<Event[]>{
        return this.http.get(this.eventUrl)
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }
    
    insert(event: Event): Promise<Event> {
//        return this.http.post(this.eventUrl, JSON.stringify(event))
        return this.http.post(this.eventUrl, event)
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }

    update(event: Event): Promise<void> {
        var urlStr = this.eventUrl + "/" + event.id;
        return this.http.put(urlStr, event)
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }
    
    remove(id: number): Promise<void> {
        var urlStr = this.eventUrl + "/" + id
//        return this.http.delete('${this.eventUrl}/${id}')
        return this.http.delete(urlStr)
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }
}
