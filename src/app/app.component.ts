import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscModule,
} from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MbscModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'mbsc-reprod';
  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      startDay: 1,
      endDay: 5,
      eventList: true,
      eventHeight: 'variable',
    },
  };
  boardCards?: MbscCalendarEvent[];

  // constructor() {
  //   this.boardCards = this.getCards();
  // }

  ngOnInit(): void {
    setTimeout(() => {
      this.boardCards = this.getCards();
    }, 2000);
  }

  getCards(): MbscCalendarEvent[] {
    return [
      {
        date: new Date(),
        title: 'Event 1',
      },
    ];
  }
}
