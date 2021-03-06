import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let events = [
            {id: 1, start_date: "2018-04-24 00:00", end_date: "2018-04-24 13:00", text: "Event 1"},
            {id: 2, start_date: "2018-04-25 00:00", end_date: "2018-04-25 13:00", text: "Event 2"}
        ];
    return {events};
    }
}