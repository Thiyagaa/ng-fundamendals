import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventBase } from '../model/event-base';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  constructor() { }

  getEvents():Observable<EventBase[]>{
    
    let subject = new Subject<EventBase[]>()
    setTimeout(()=> {subject.next(EVENTS);subject.complete();},2000)
    return subject
    
    //return of(EVENTS).pipe(delay(2000));
    
  }

  getEvent(id: number) : EventBase{
    return<EventBase> EVENTS.find(m=> m.id === id)
  }
}

const EVENTS:EventBase[] = [{
    "id": 1,
    "name" : "Leh-Ladak Bike trip",
    "date" : new Date('8-August-2021'),
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
    "date" : new Date("3-March-2021"),
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
    "date" : new Date("11-November-2021"),
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 4,
    "name" : "TNPSC online class",
    "date" : new Date("11-November-2021"),
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 5,
    "name" : "TNPSC online class",
    "date" : new Date("11-November-2021"),
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 6,
    "name" : "TNPSC online class",
    "date" : new Date("11-November-2021"),
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 7,
    "name" : "TNPSC online class",
    "date" : new Date("11-November-2021"),
    "time" : "7.00 pm",
    "price" : 0,
    "onlineUrl" : "https://tnpscexams.net",
    "eventType": "Educational"
  },{
    "id": 8,
    "name" : "Ortho Doctor Visit",
    "date" : new Date("03-March-2021"),
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
