import { Component} from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormControl,FormGroup} from '@angular/forms';
import { FormatterService } from 'src/app/services/formatter.service';
import { Action, IColumnMap, StoreService } from 'src/app/services/store.service';
import { BaseListComponent } from 'src/app/class/BaseListComponent';
import { TitleService } from 'src/app/services/title-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.scss']
})
export class AlmacenComponent extends BaseListComponent {
  public endpoint: string = '/almacen';
  public columnMap: IColumnMap = {
        "ID": '_id',
        'Nombre': 'nombre',
        'Clave': 'clave',
        'Activo': 'activo',
  };
  public titles={title:'Almacén',link:'almacen'}
  public filters:FormGroup=new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    activo:new FormControl('')
  });
  public override actions:Array<Action>=[]
  public formatters:{[key:string]:Function};
  constructor(_request: RequestService, _data: AsyncDataService,
    _formatter: FormatterService, _store: StoreService,_title: TitleService, private _router:Router) {
      super(_request,_data,_store,_title);
      this.formatters={activo:_formatter.activos}
      this.actions=[
        {
          htmlTag: '<i class="fa fa-pencil"></i>',
          tooltip:'Ir a edit',
          function: (event:Event,row:any[]) => { 
            event.preventDefault();
            this._router.navigate([`/almacen/${row[0]}`]);
           }
         },
      ];
  }
  public idName(value:string){
    return 'true';
  }
  
}
