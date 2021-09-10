import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQUERY_TOKEN } from 'src/app/service/jquery.service.service';

@Component({
	selector: 'app-simple-modal',
	templateUrl: './simple-modal.component.html',
	styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input()  title = ''
  @Input()  elementId = ''
  @ViewChild('modalcontainer') containerElement!: ElementRef;
  constructor(@Inject(JQUERY_TOKEN) private $:any) { }

  ngOnInit(): void {
  }
  closeModal(){
  	this.$(this.containerElement.nativeElement).modal('hide');
  }
}
