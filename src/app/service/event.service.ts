import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  constructor() { }

  getEvents(){
    
    let subject = new Subject()
    setTimeout(()=> {subject.next(EVENTS);subject.complete();},2000)
    return subject
    
    //return of(EVENTS).pipe(delay(2000));
    
  }

  getEvent(id: number){
    return EVENTS.find(m=> m.id === id)
  }
}

const EVENTS = [{
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
    
    },
    "eventType": "Adventure",
    "difficulty": "Moderate"
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
    },
    "eventType": "Leisure",
    "difficulty": "Easy"
  },{
    "id": 3,
    "name" : "TNPSC online class",
    "date" : "11-11-2021",
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 4,
    "name" : "TNPSC online class",
    "date" : "11-11-2021",
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 5,
    "name" : "TNPSC online class",
    "date" : "11-11-2021",
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 6,
    "name" : "TNPSC online class",
    "date" : "11-11-2021",
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 7,
    "name" : "TNPSC online class",
    "date" : "11-11-2021",
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 8,
    "name" : "Ortho Doctor Visit",
    "date" : "3-March-2021",
    "time" : "8.00 am",
    "price" : 25000,
    "location": {
      "address": "1 South Andaman Market",
      "city" : "Andaman and Nicobar",
      "country": "India",
      "province": "South Andaman"
    },
    "eventType": "Checkup",
    "difficulty": "NA"
  }
]
