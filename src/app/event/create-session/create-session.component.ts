import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionBase } from 'src/app/model/event-base';
import { restrictedWords } from 'src/app/service/app.validators.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  newSessionForm!: FormGroup;

  @Output() saveEmitter = new EventEmitter()

  @Output() cancelEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('',Validators.required)
    this.presenter = new FormControl('',Validators.required)
    this.duration = new FormControl('',Validators.required)
    this.level = new FormControl('',Validators.required)
    this.abstract = new FormControl('',[Validators.required,Validators.maxLength(100),restrictedWords(["foo","bar"])])

    this.newSessionForm = new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
    })
  }

  saveSession(values: any){
    let session : SessionBase= {
      id: 1,
      abstract : values.abstract,
      duration : +values.duration,
      level : values.level,
      title : values.name,
      presenter: values.presenter
    }
    
    console.log("in save session")

    this.saveEmitter.emit(session)
  }

  print(values:any){

    console.log(JSON.stringify(values));
    
  }

  cancel(){
    this.cancelEmitter.emit(false)
  }

  
}
