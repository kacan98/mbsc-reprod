import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  somethingThatChangesTheHeighAsynchronously?: string;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.somethingThatChangesTheHeighAsynchronously =
        faker.string.sample(100);
    }, 1000);
  }
}
