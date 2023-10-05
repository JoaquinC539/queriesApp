import { Component,OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// @Output() newItemEvent=new EventEmitter<string>()
export class DashboardComponent {
  constructor(private titleService:TitleService){
    this.titleService.setTitle("Dashboard","index")
  }
}
