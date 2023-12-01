import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/class/BaseListComponent';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormatterService } from 'src/app/services/formatter.service';
import { RequestService } from 'src/app/services/request.service';
import { Action, IColumnMap, StoreService } from 'src/app/services/store.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-conf-auto-transporte',
  templateUrl: './conf-auto-transporte.component.html',
  styleUrls: ['./conf-auto-transporte.component.scss']
})
export class ConfAutoTransporteComponent extends BaseListComponent{
  public override endpoint: string='/configTransporte';
  public override columnMap: IColumnMap={
    "ID":'_id',
    'Nombre':'nombre',
    'Clave':'clave'
  };
  public override filters: FormGroup<any>=new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
  });
  public override actions: Action[] | undefined=[
    {htmlTag:'<i class="fa fa-pencil"></i>',
  function:(event:Event,row:any[])=>{
    event.preventDefault();
    this._router.navigate(['/confAutoTransporte/'+row[0]]);
  }}
  ]
  public override titles: { title: string; link: string; }={title:'AutoTransportes',link:'/subMenu'};
  public override formatters: { [key: string]: Function; }={};
  constructor(_request: RequestService, _data: AsyncDataService,private _router:Router,
    _formatter: FormatterService, _store: StoreService,_title: TitleService){
    super(_request,_data,_store,_title)
  }

  

}
