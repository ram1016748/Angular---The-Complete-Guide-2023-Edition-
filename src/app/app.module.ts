import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccssAlertComponent } from './succss-alert/succss-alert.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignement3Component } from './assignement3/assignement3.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccssAlertComponent,
    Assignment2Component,
    Assignement3Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
