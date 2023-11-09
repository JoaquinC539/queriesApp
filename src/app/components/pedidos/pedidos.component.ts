import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseListComponent } from 'src/app/class/BaseListComponent';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormatterService } from 'src/app/services/formatter.service';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent extends BaseListComponent implements OnInit  {
  
  public columnMap:{[key:string]:string}={
    "Id":'_id',
    'Total':'total',
    'Tipo de Cambio':'tipoCambio',
    'Total MXN':'totalMXN',
    'Tienda':'tienda'
  }
  public titles={title:'Pedidos',link:'pedidos'}
  public endpoint:string='/pedido'
  public filters=new FormGroup({});
  public formatters:{[key:string]:Function}={};
  constructor(_request: RequestService, _data: AsyncDataService,
    _formatter: FormatterService, _store: StoreService,_title: TitleService) {
      super(_request,_data,_store,_title)
    this.formatters={total:_formatter.formatCurrency,tipoCambio:_formatter.tipoNumero,totalMXN:_formatter.formatCurrency,tienda:this.tiendaIn}
  }
  tiendaIn(value:any):string{
    return value['tienda'];
  }
  

}
