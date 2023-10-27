import { Component,OnInit,OnDestroy,Input } from '@angular/core';
import { Observable, Subject, takeUntil, lastValueFrom} from 'rxjs';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { RequestService } from 'src/app/services/request.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit,OnDestroy {
  public facturas:Array<{[key:string]:any}>;
  public count:number=0;
  public facturasColumnsMap:{[key:string]:string}
  public facturasData:Array<any>=[]
  public endpoint:string='/factura'
  @Input() public fetchData:Observable<any>
  
  private destroy$=new Subject<void>();
  public params:{[key:string]:any}
  
  constructor(private titleService:TitleService,private _httpService:RequestService,
    private _dataService:AsyncDataService) {
      this.facturas=[];
    this.fetchData=this._httpService.getListIndex(this.endpoint)
    this.titleService.setTitle("Facturas","facturas");
    this.params={}
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
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }  

  ngOnInit():void{
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
    const source= this._httpService.getListIndex(this.endpoint,this.params);
    const data= await lastValueFrom(source);
    const formatters={fecha:this.formatDate,total:this.formatNumber};
    this.facturas=data[0].results ? data[0].results : [] ;
    this.count=data[0].count[0] ? data[0].count[0].count :0;
    await this._dataService.passListAsyncData([this.facturasColumnsMap,this.facturas,formatters
      ,{documentsLength:this.facturas.length,count:this.count}]);
  }

  public formatDate(date:Date | string){
    let datejs=new Date(date);
        return datejs.toLocaleDateString("es-MX");
  }
  public formatNumber(value:number | string):string{
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    if (isNaN(value)) {
      return '';
    }
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  

  

}
