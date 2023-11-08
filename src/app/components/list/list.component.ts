import { Component,OnInit } from '@angular/core';
import { AsyncDataService } from 'src/app/services/async-data.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  documents:any[]=[];
  constructor(private _data:AsyncDataService) {
    }
    
    ngOnInit(): void {
      
    }
    
}
