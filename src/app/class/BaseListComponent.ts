import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, takeUntil } from "rxjs";
import { RequestService } from "../services/request.service";
import { AsyncDataService } from "../services/async-data.service";
import { FormatterService } from "../services/formatter.service";
import { StoreService } from "../services/store.service";

@Component({
    template:''
})
export abstract class BaseListComponent implements OnInit,OnDestroy{
    public abstract endpoint:string;
    public abstract columnMap:{[key:string]:string};
    public abstract filters:FormGroup;
    public params: { [key: string]: any } = this._store.storeListData.params;
    private source: Observable<any>=new Observable();
    constructor(protected _request:RequestService,protected _data:AsyncDataService,
        protected _formatter:FormatterService,protected _store:StoreService){
    }

    ngOnDestroy(): void {
        this._data.destroy$.next();
        this._data.destroy$.complete();
    }

    ngOnInit(): void {
        this.Fetch();
        this._data.changeEmitter.pipe(takeUntil(this._data.destroy$)).subscribe((change:boolean)=>{
            if(change){
                this.Fetch();
            }
        })
    }

    public async Fetch(){
        this.params=this._store.storeListData.params
        this.source = this._request.getListIndex(this.endpoint, this.params);
        this.source.pipe(takeUntil(this._data.destroy$)).subscribe((data)=>{
            const results = data[0].results ? data[0].results : [];
            const count = data[0].count[0] ? data[0].count[0].count : 0;
            this._store.storeListData = {
                columnMap: this.columnMap, data: results, count: count, params: this.params,
                formatter: { activo: this._formatter.activos }
            };
            this._data.passListAsyncData(this._store.storeListData);
        });
    }
    public clearParams():void{
        this._store.storeListData.params={};
    }
    public updateParams(params:{[key:string]:string|number|boolean}):void{
        this._store.storeListData.params={...params}
        console.log(this._store.storeListData.params)
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