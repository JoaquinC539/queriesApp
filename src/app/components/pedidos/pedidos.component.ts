import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject,lastValueFrom,takeUntil } from 'rxjs';
import { TitleService } from 'src/app/services/title-service.service';
import { RequestService } from 'src/app/services/request.service';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit,OnDestroy {
  public pedidos:Array<{[key:string]:any}>;
  public count:number=0;
  public pedidosColumnsMap:{[key:string]:string}
  public facturasData:Array<any>=[]
  public endpoint:string='/pedido'
  @Input() public fetchData:Observable<any>
  private destroy$=new Subject<void>()
  public params:{[key:string]:any}
  constructor(private _title:TitleService,private _request:RequestService,private _dataService:AsyncDataService,private _formatter:FormatterService ){
    this.pedidos=[];
    this.fetchData=this._request.getListIndex(this.endpoint);
    this._title.setTitle("Pedidos",'pedidos');
    this.params={};
    this.pedidosColumnsMap={
      "Id":'_id',
      'Total':'total',
      'Tipo de Cambio':'tipoCambio',
      'Total MXN':'totalMXN',
      'Tienda':'tienda'
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
   
  }

  public async Fetch(){
    
    const source= this._request.getListIndex(this.endpoint,this.params);
    const data= await lastValueFrom(source);
    this.pedidos=data[0].results ? data[0].results : [];
    for(let i=0;i<this.pedidos.length;i++){
      this.pedidos[i]['tienda']= this.pedidos[i]['tienda']['tienda']
    }
    this.count=data[0].count[0] ? data[0].count[0].count :0;
    this._dataService.passListAsyncData({
      columnMap: this.pedidosColumnsMap,
      data: this.pedidos,
      count: 0,
      params: this.params
    });
  }

}
