import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  
  newEventForm!: FormGroup
  newEvent: any ={}
  
  options: DatepickerOptions = {
  minYear: getYear(new Date()) - 30, // minimum available and selectable year
  maxYear: getYear(new Date()) + 30, // maximum available and selectable year
  placeholder: '', // placeholder in case date model is null | undefined, example: 'Please pick a date'
  format: 'dd/MM/yyyy', // date format to display in input
  formatTitle: 'LLLL yyyy',
  formatDays: 'EEEEE',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  position: 'bottom',
  inputClass: '', // custom input CSS class to be applied
  calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
  scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
};

  constructor(private router: Router,private eventService:EventService) { }

  ngOnInit(): void {
    
    // let eventName = new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9].*')])
    // let date = new FormControl('',[Validators.required])
    // let time = new FormControl('',[Validators.required])
    // let subject = new FormControl('',[Validators.required])
    // let price = new FormControl('',[Validators.required])
    // let location = new FormControl('',[Validators.required])
    // let address = new FormControl('',[Validators.required])
    // let city = new FormControl('',[Validators.required])
    // let country = new FormControl('',[Validators.required])
    // let province = new FormControl('',[Validators.required])
    // let eventType = new FormControl('',[Validators.required])
    // let difficulty = new FormControl('',[Validators.required])
    // let onlineUrl = new FormControl('',[Validators.required])
    // let imageUrl = new FormControl('',[Validators.required])


    // this.newEventForm = new FormGroup({
    //     name:eventName,
    //     date:date,
    //     time:time,
    //     subject:subject,
    //     price:price,
    //     location:location,
    //     address:address,
    //     city:city,
    //     country:country,
    //     province:province,
    //     eventType:eventType,
    //     difficulty:difficulty,
    //     onlineUrl:onlineUrl,
    //     imageUrl:imageUrl
    // })
  
  }

  isDirty: boolean = true

  cancel(){
    this.router.navigate(['/events'])
  }

  createEvent(values:any){
    console.log(values)
    this.eventService.addNewEvent(values)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

}
function getYear(arg0: Date) {
  return arg0.getFullYear()
}

