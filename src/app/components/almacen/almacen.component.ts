import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject,lastValueFrom,takeUntil } from 'rxjs';
import { TitleService } from 'src/app/services/title-service.service';
import { RequestService } from 'src/app/services/request.service';
import { AsyncDataService } from 'src/app/services/async-data.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.scss']
})
export class AlmacenComponent implements OnInit,OnDestroy {
  public almacenes:Array<{[key:string]:any}>;
  public count:number=0;
  public almacenColumnsMap:{[key:string]:string}
  public facturasData:Array<any>=[]
  public endpoint:string='/almacen'
  @Input() public fetchData:Observable<any>

  private destroy$=new Subject<void>()
  public params:{[key:string]:any}
  constructor(private _title:TitleService,private _request:RequestService,private _dataService:AsyncDataService ) {
    this.almacenes=[];
    this.fetchData=this._request.getListIndex(this.endpoint);
    this._title.setTitle("Almacén",'almacen');
    this.params={};
    this.almacenColumnsMap={
      "ID":'_id',
      'Clave':'clave',
      'Nombre':'nombre',
      'Activo':'activo'
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
      this.index();
  }

  public async index(){
    this.Fetch();
    await this._dataService.paginatorEmitter
    .pipe(takeUntil(this.destroy$))
    .subscribe((data)=>{
      this.params=data;
        this.Fetch();
      });
  }

  public async Fetch(){
    this._dataService.passChange();
    const source= this._request.getListIndex(this.endpoint,this.params);
    const data= await lastValueFrom(source);
    this.almacenes=data[0].results ? data[0].results : [];
    this.count=data[0].count[0] ? data[0].count[0].count :0;
    await this._dataService.passListAsyncData([this.almacenColumnsMap,this.almacenes,{}
      ,{documentsLength:this.almacenes.length,count:this.count}]);
  }
}
