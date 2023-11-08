import { Component, Input, OnInit, } from '@angular/core';


@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {
  @Input() link:string
  @Input() text:string
  constructor(){
    this.link="";
    this.text="";
  }
  ngOnInit(): void {
      
  }
}
