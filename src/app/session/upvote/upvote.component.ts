import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-upvote',
	templateUrl: './upvote.component.html',
	styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() voted: any;
  /*
    @Input() set voted(val: any){
      // ===>>> this will act for every click event and toggle the result..
      this.iconColor = val? 'red':'black'
      console.log(this.iconColor)
    };
  */
  @Input() count: any;
  @Output() vote = new EventEmitter();
  votedHeart:any = faHeart
  iconColor='';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
  	this.vote.emit({});
  }

}
