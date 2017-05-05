import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { DateCalculatorFormComponent } from './date-calculator-form/date-calculator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCalculatorFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyDatePickerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
