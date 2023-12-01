import { Component,AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/class/BaseListComponent';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormatterService } from 'src/app/services/formatter.service';
import { RequestService } from 'src/app/services/request.service';
import { Action, IColumnMap, SelectOptions, StoreService } from 'src/app/services/store.service';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-auto-transporte',
  templateUrl: './auto-transporte.component.html',
  styleUrls: ['./auto-transporte.component.scss']
})
export class AutoTransporteComponent extends BaseListComponent implements AfterViewInit{
  public override endpoint: string='/autoTransporte';
  public override columnMap: IColumnMap = {
    "ID": '_id',
    'Nombre': 'nombre',
    'Clave': 'clave',
    'Año modelo': 'anioModeloVM',
    'Aseguradora Responsabilidad Civil': 'aseguraRespCivil',
    'Configutación Vehicular': 'configVehicular',
    'Numero Permiso SCT': 'numPermisoSCT',
    'Permiso SCT': 'permSCT',
    'Placa VM': 'placaVM',
    'Poliza Responsabilidad Civil': 'polizaRespCivil'
};

  public override filters: FormGroup<any> = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    clave: new FormControl(''),
    anioModeloVM: new FormControl(''),
    aseguraRespCivil: new FormControl(''),
    configVehicular: new FormControl(''),
    numPermisoSCT: new FormControl(''),
    permSCT: new FormControl(''),
    placaVM: new FormControl(''),
    polizaRespCivil: new FormControl('')
  });

  public override actions: Action[] | undefined=[
    {htmlTag:'<i class="fa fa-pencil"></i>',
  function:(event:Event,row:any[])=>{
    event.preventDefault();
    this._router.navigate(['/autoTransporte/'+row[0]]);
  }}
  ]
  public configVehicular:Array<SelectOptions>=[];
  public override titles: { title: string; link: string; }={title:'AutoTransportes',link:'/subMenu'};
  public override formatters: { [key: string]: Function; }
  constructor( _request: RequestService, _data: AsyncDataService,private _router:Router,
    _formatter: FormatterService, _store: StoreService,_title: TitleService){
    super(_request,_data,_store,_title);
    this.formatters={configVehicular:_formatter.idName}
  }
  ngAfterViewInit(): void {
    this._request.index('configTransporte')
      .subscribe((data)=>{
        const results:Array<{[key:string]:any}>=data[0]['results'];
        for(let i=0;i<results.length;i++){
          let object:SelectOptions={value:results[i]['_id'],name:results[i]['nombre']}
          this.configVehicular.push(object);
        }
      });
      
  }

  
  

      
}
