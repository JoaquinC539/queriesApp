import { Component} from '@angular/core';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { ParseService } from 'src/app/services/parse.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public tableColumns:Array<string>;
  public tableCellData:Array<any>;
  public loading:boolean=true;
  private dataSubscription:any
  constructor(private _parse:ParseService,private _data:AsyncDataService){
    this.tableCellData=[];
    this.tableColumns=[];
  }
  ngOnInit(){
    this.dataSubscription= this._data.servedData.subscribe((data:any)=>{
      this.loading=false;
      this.tableColumns=Object.keys(data[0]);
      const parsedData:Array<any>=this._parse.parseObjectTable(data[0],data[1],data[2]);
      this.tableCellData=parsedData;
      this._data.servedData.unsubscribe();
    });
  }
  
  

}
