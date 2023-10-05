import { Component,OnInit } from '@angular/core';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { RequestService } from 'src/app/services/request.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent {
  public facturas:any;
  public count:number=0;
  public facturasColumnsMap:{[key:string]:string}
  public facturasData:Array<any>=[]
  constructor(private titleService:TitleService,private _httpService:RequestService,private _dataService:AsyncDataService) {
    this.titleService.setTitle("Facturas","facturas");
    this.facturasColumnsMap={
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
    


  }
  ngOnInit(){
    this.getFacturasIndex();
    
  }

  public async getFacturasIndex(){
    const facturas=await this._httpService.getFacturasIndex();
    facturas.subscribe((data:any)=>{
      const formateDate=(date:Date | string):string=>{
        let datejs=new Date(date);
        return datejs.toLocaleDateString("es-MX");
      }
      const formatters={fecha:formateDate}
      this._dataService.passAsyncData([this.facturasColumnsMap,data[0].results,formatters])
      this.facturas=data[0].results;
      this.count=data[0].count;
    })
    
  }

}
