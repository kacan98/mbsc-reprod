import {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscModule,
} from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonContent, MbscModule, FormsModule, RouterOutlet],
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
  resources = [
    {
      id: 'r1',
      name: 'Resource 1',
    },
    {
      id: 'r2',
      name: 'Resource 2',
    },
    {
      id: 'r3',
      name: 'Resource 3',
    },
    {
      id: 'r4',
      name: 'Resource 4',
    },
    {
      id: 'r5',
      name: 'Resource 5',
    },
  ];
  boardCards?: MbscCalendarEvent[];

  // constructor() {
  //   this.boardCards = this.getCards();
  // }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.boardCards = this.getCards();
    // }, 2000);
  }

  getCards(): MbscCalendarEvent[] {
    return getMockCards(5);
  }
}

const getMockCards = (count: number = 10): MbscCalendarEvent[] => {
  const cards: MbscCalendarEvent[] = [];
  for (let i = 0; i < count; i++) {
    cards.push(getMockCard(i));
  }
  return cards;
};

const getMockCard = (id?: number): MbscCalendarEvent => {
  if (!id) {
    id = Math.floor(Math.random() * 1000);
  }
  return {
    date: new Date(),
    title: `Event ${id}`,
    resource: `r1`,
  };
};
