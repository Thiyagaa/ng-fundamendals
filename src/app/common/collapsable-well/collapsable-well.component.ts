import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent implements OnInit {

  @Input() title!: string;
  
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent(){
    this.visible = !this.visible;
  }

}
