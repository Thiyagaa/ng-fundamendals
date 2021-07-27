import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  eventlist = [{
    "id": 1,
    "name" : "Leh-Ladak Bike trip",
    "date" : "8-August-2021",
    "time" : "8.00 am",
    "price" : 25000,
    "location": {
      "address": "1 Leh Market",
      "city" : "Leh",
      "country": "India",
      "province": "Ladakh"
    }
  },{
    "id": 2,
    "name" : "Andaman Couple trip",
    "date" : "3-March-2021",
    "time" : "8.00 am",
    "price" : 25000,
    "location": {
      "address": "1 South Andaman Market",
      "city" : "Andaman and Nicobar",
      "country": "India",
      "province": "South Andaman"
    }
  }
]

/*

  //passing data between components
  
  handleChildClick (data: any){
      console.log("Received "+data)
  }
*/  
}
