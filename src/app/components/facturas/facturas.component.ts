import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseListComponent } from 'src/app/class/BaseListComponent';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormatterService } from 'src/app/services/formatter.service';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent extends BaseListComponent {
  public columnMap:{[key:string]:string}={
    "Id":'_id',
    "Cliente":'cliente',
    "Estatus":'estatus',
    "Tipo":'tipo',
    "Serie":'serie',
    "Folio":'folio',
    "Fecha":'fecha',
    "Razón Social":'razonSocial',
    "Forma de Pago":'formaDePago',
    "Moneda":"moneda",
    "Tienda":'tienda',
    "Total":'total'
  }
  public endpoint:string='/factura';
  public titles={title:'Factura',link:'factura'}
  public filters:FormGroup=new FormGroup({});
  public formatters:{[key:string]:Function}={};
  
  constructor(_request: RequestService, _data: AsyncDataService,
    _formatter: FormatterService, _store: StoreService,_title: TitleService) {
      super(_request,_data,_store,_title);
    this.formatters={total:_formatter.formatCurrency,fecha:_formatter.formatDate}
  }
  

}
