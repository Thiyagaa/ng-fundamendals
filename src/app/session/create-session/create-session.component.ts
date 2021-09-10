import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedWords } from '../../service/app.validators.service';
import { SessionBase } from '../../model/event-base';

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

	ngOnInit(): void {
		this.name = new FormControl('',Validators.required);
		this.presenter = new FormControl('',Validators.required);
		this.duration = new FormControl('',Validators.required);
		this.level = new FormControl('',Validators.required);
		this.abstract = new FormControl('',[Validators.required,Validators.maxLength(100),restrictedWords(['foo','bar'])]);

		this.newSessionForm = new FormGroup({
			name:this.name,
			presenter:this.presenter,
			duration:this.duration,
			level:this.level,
			abstract:this.abstract
		});
	}

	saveSession(values: { abstract: string; duration: string | number; level: string; name: string; presenter: string; }):void{
		const session : SessionBase= {
			id: 1,
			abstract : values.abstract,
			duration : +values.duration,
			level : values.level,
			title : values.name,
			presenter: values.presenter,
			voters: []
		};
		
		console.log('in save session');

		this.saveEmitter.emit(session);
	}

	print(values:unknown):void{

		console.log(JSON.stringify(values));
		
	}

	cancel():void{
		this.cancelEmitter.emit(false);
	}

	
}
