import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

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
      // This simulates a change in the height of the card
      this.somethingThatChangesTheHeighAsynchronously =
        faker.string.sample(100);
    }, 1000);
  }
}
