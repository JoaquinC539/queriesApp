import { Component,OnInit,OnDestroy} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { ParseService } from 'src/app/services/parse.service';
import { StoreList, StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy,OnInit{
  public tableColumns:Array<string>;
  public tableCellData:Array<any>;
  public loading:boolean=true;
  private destroy$=new Subject<void>();
  
  constructor(private _parse:ParseService,private _data:AsyncDataService,private _store:StoreService){
    this.tableCellData=[];
    this.tableColumns=[];
  }
   ngOnInit():void{
    this.loadData();
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  private loadData():void{
    this.loading=true;
    this._data.emitterDataList
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:StoreList)=>{
      this.loading=false;
      const parsedData:Array<any>=this._parse.parseObjectTable(data.columnMap,data.data,data.formatter);
      this.tableCellData=parsedData;
    });
    
  }

  

  

}
