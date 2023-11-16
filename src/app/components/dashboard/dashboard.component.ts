import { Component,OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// @Output() newItemEvent=new EventEmitter<string>()
export class DashboardComponent implements OnInit{
  constructor(private _title:TitleService, private _store:StoreService){
    
  }
  ngOnInit(): void {
      this._store.titles.title="Dashboard";
      this._store.titles.link="index";
      this._title.setTitle();
  }
}
