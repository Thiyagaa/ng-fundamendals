import { Directive,ElementRef,Inject,Input,OnInit } from '@angular/core';
import { JQUERY_TOKEN } from './../../service/jquery.service.service';

@Directive({
	selector: '[app-modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

	private el: HTMLElement
	@Input('app-modal-trigger') modalId = '';
	constructor( @Inject(JQUERY_TOKEN) private $: any, elemRef : ElementRef )	{
		console.log('Directive constructor called');
		this.el = elemRef.nativeElement;
	}

	ngOnInit(): void {
		console.log('directive on init called');
		this.el.addEventListener('click', () => {
			console.log('You clicked me!');
			console.log(this.el.classList);
			this.$(`#${this.modalId}`).modal('show'); // https://stackoverflow.com/questions/56521289/bootstrap-modal-dialog-not-showing-when-using-fade-animation/56521684
		});
	}

}
