import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CardComponent } from '../card/card.component';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    MbscModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    RouterOutlet,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
