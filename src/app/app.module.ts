import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MaterialModule} from './material-module';
import {QuestionComponent} from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, QuestionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
