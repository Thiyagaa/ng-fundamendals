import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQUERY_TOKEN } from '../../service/jquery.service.service';

@Component({
	selector: 'app-simple-modal',
	templateUrl: './simple-modal.component.html',
	styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent{

	@Input()	title = ''
	@Input()	elementId = ''
	@ViewChild('modalcontainer') containerElement!: ElementRef;
	constructor(@Inject(JQUERY_TOKEN) private $:JQueryStatic) { }

	closeModal():void{
		this.$(this.containerElement.nativeElement).modal('hide');
	}
}
