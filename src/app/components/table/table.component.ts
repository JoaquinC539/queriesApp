import { Component,OnInit,OnDestroy} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { ParseService } from 'src/app/services/parse.service';
import { Action, StoreList, StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';


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
  public actions:boolean=false;
  public icono:string='<i class="fa fa-pencil"></i>'
  public actionButtons:Array<Action>=[];
  
  constructor(private _parse:ParseService,private _data:AsyncDataService,private _store:StoreService, private router:Router){
    this.tableCellData=[];
    this.tableColumns=[];
  }
   ngOnInit():void{
    this.loadData();
    this._data.changeEmitter.subscribe((change:boolean)=>{
      if(change){
        this.loading=true;
      }
    })
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
      this.tableColumns=Object.keys(data.columnMap)
      if(data.actions!==undefined){
        this.actions=true;
        this.tableColumns.unshift("Acciones");
        this.actionButtons=data.actions
      }
      const parsedData:Array<any>=this._parse.parseObjectTable(data.columnMap,data.data,data.formatter);
      this.tableCellData=parsedData;
    });
  }
  

  

  

}
