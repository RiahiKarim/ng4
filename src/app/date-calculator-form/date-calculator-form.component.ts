import { Component, OnInit } from '@angular/core';
import {IMyOptions} from 'mydatepicker';
import * as moment from "moment";


@Component({
  selector: 'date-calculator-form',
  templateUrl: './date-calculator-form.component.html',
  styleUrls: ['./date-calculator-form.component.css']
})
export class DateCalculatorFormComponent  {
  
  private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd-mm-yyyy',
    };

  model = {};
  duration =  null;
  endDateIncluded = false;
  displayResult = false;


  onSubmit() {  

    if(moment(this.model['endDate'].jsdate).isBefore(this.model['startDate'].jsdate)){
        var tmp = this.model['endDate'];
        this.model['endDate'] = this.model['startDate'];
        this.model['startDate'] = tmp;
    }

    this.duration = moment(this.model['endDate'].jsdate).diff(this.model['startDate'].jsdate, 'days');
    if(this.endDateIncluded){
      this.duration += 1;
    }
    this.displayResult = true;
  }
  
}

