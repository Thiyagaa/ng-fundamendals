import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-collapsable-well',
	templateUrl: './collapsable-well.component.html',
	styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent {

	@Input() title='';
	
	visible = true;

	toggleContent():void{
		this.visible = !this.visible;
	}

}
