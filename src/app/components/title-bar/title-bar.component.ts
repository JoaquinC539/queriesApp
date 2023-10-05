import { Component,Input,OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';
@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {
  // @Input() title:string="Placeholder";
  // @Input() link:string="/index"
  public title:string="Placeholder"
  public linkComponent:string="/index"

  constructor(private titleService:TitleService){
    
  }
  ngOnInit(){
    this.titleService.titleChanged.subscribe((titleData:Array<string>)=>{
      this.title=titleData[0];
      this.linkComponent=titleData[1]
    });
  }
}
