import { Component } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource
} from '@mobiscroll/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
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
  resources = [
    {
      id: 'r1',
      name: 'Resource 1',
    },
    ...getMockResources(20),
  ];
  boardCards?: MbscCalendarEvent[];

  constructor() {
    this.boardCards = this.getCards();
  }

  getCards(): MbscCalendarEvent[] {
    return getMockCards(2);
  }
}

const getMockCards = (count: number = 10): MbscCalendarEvent[] => {
  return Array.from({ length: count }, (_, i) => getMockCard(i));
};

const getMockCard = (id?: number): MbscCalendarEvent => {
  if (id === undefined) {
    id = Math.floor(Math.random() * 1000);
  }
  return {
    date: new Date(),
    title: `Event ${id}`,
    resource: `r1`,
  };
};

const getMockResource = (id?: number): MbscResource => {
  if (id === undefined) {
    id = Math.floor(Math.random() * 10000 + 1); //make sure id is not 1
  }
  return {
    id: `r${id}`,
    name: `Resource ${id}`,
  };
};

const getMockResources = (count: number = 10): MbscResource[] => {
  return Array.from({ length: count }, (_, i) => getMockResource(i + 2));
};
