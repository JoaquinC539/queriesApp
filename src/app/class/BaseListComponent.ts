import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, takeUntil } from "rxjs";
import { RequestService } from "../services/request.service";
import { AsyncDataService } from "../services/async-data.service";
import { Action, IColumnMap, StoreService } from "../services/store.service";
import { TitleService } from "../services/title-service.service";
import { Subject } from 'rxjs';

export interface BaseListComponent{
    actions?:Action[];
}

@Component({
    template:''
})
export abstract class BaseListComponent implements OnInit,OnDestroy{
    public abstract endpoint:string;
    public abstract columnMap:IColumnMap;
    public abstract filters:FormGroup;
    public abstract titles:{title:string,link:string};
    public abstract formatters:{[key:string]:Function};
    private destroy$=new Subject<void>()
    
    public params: { [key: string]: any } = this._store.storeListData.params;
    private source: Observable<any>=new Observable();
    constructor(protected _request:RequestService,protected _data:AsyncDataService,
        protected _store:StoreService,private _title:TitleService){
    }

    ngOnDestroy(): void {
        this.clearParams();
        this.destroy$.next();
        this.destroy$.complete();
        
    }

    ngOnInit(): void {
        this._store.titles.title=this.titles.title;
        this._store.titles.link=this.titles.link;
        this._title.setTitle()
        this.Fetch();
        this._data.changeEmitter.pipe(takeUntil(this.destroy$)).subscribe((change:boolean)=>{
            if(change){
                this.Fetch();
            }
        })
    }

    public async Fetch(){
        this.source = this._request.index(this.endpoint, this._store.storeListData.params);
        this.source.pipe(takeUntil(this.destroy$)).subscribe((data)=>{
            let results;
            let count;
            if(data===undefined){
                results=[];
                count=[]
            }else{
                results = data[0].results ? data[0].results : [];
                count = data[0].count[0] ? data[0].count[0].count : 0;
            }
            this._store.storeListData = {
                columnMap: this.columnMap, data: results, count: count, params: this.params,
                formatter: this.formatters,endpoint:this.endpoint
            };
            if(this.actions){
                this._store.storeListData['actions']=this.actions
            }
            this._data.passListAsyncData(this._store.storeListData);
        });
    }
    public clearParams():void{
        this._store.storeListData.params={};
    }
    public updateParams(params:{[key:string]:string|number|boolean}):void{
        this._store.storeListData.params={...params}
    }

    public  filtrar(){
        if(this.filters.value.activo){
          this.filters.value.activo='on'
        }
        this.updateParams(this.filters.value);
        this._data.passFilter(true);
      }
      public async removerFiltros() {
        this.clearParams();
        this._data.passFilter(true);
        this.filters.reset();
      }

    
}