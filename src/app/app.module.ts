import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CardComponent } from '../card/card.component';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  provideIonicAngular,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from '@ionic/angular/standalone';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    MbscModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterOutlet,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
  ],
  bootstrap: [AppComponent],
  providers: [provideIonicAngular()],
})
export class AppModule {}
