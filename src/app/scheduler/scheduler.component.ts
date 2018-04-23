import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";
import {} from "@types/dhtmlxscheduler";
import { EventService } from "../event.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;

  constructor(private eventService: EventService) { }

  ngOnInit() {
//    scheduler.init(this.schedulerContainer.nativeElement, new Date());
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement, new Date());
    this.eventService.get()
      .then((data) => {
        scheduler.parse(data, "json");
      })
  }

}
