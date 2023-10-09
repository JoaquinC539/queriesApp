import { Component,OnInit,OnDestroy} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { ParseService } from 'src/app/services/parse.service';


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
  
  constructor(private _parse:ParseService,private _data:AsyncDataService){
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
    .subscribe((data:any)=>{
      this.loading=false;
      this.tableColumns=Object.keys(data[0]);
      const parsedData:Array<any>=this._parse.parseObjectTable(data[0],data[1],data[2]);
      this.tableCellData=parsedData;
      this._data.changeEmitter.pipe(takeUntil(this.destroy$)).subscribe((change)=>{
        if(change){
          this.tableCellData=[];
          this.tableColumns=[];
          this.loading=true;
          this.loadData();
        }
      })
      
    });
    
  }

  

  

}
