import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-upvote',
	templateUrl: './upvote.component.html',
	styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
	@Input() voted=false;
	/*
		@Input() set voted(val: any){
			// ===>>> this will act for every click event and toggle the result..
			this.iconColor = val? 'red':'black'
			console.log(this.iconColor)
		};
	*/
	count=0;
	@Input() set voterCount(val:number|undefined){
		if(val){this.count = val;}
	}
	@Output() vote = new EventEmitter();
	votedHeart:IconDefinition = faHeart
	iconColor='';


	onClick():void{
		this.vote.emit({});
	}

}
