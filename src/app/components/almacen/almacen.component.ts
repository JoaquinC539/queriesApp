import { Component} from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormControl,FormGroup} from '@angular/forms';
import { FormatterService } from 'src/app/services/formatter.service';
import { StoreService } from 'src/app/services/store.service';
import { BaseListComponent } from 'src/app/class/BaseListComponent';
import { TitleService } from 'src/app/services/title-service.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.scss']
})
export class AlmacenComponent extends BaseListComponent {
  public endpoint: string = '/almacen';
  public columnMap: { [key: string]: string } = {
        "ID": '_id',
        'Clave': 'clave',
        'Nombre': 'nombre',
        'Activo': 'activo'
  };
  public titles={title:'Almacén',link:'almacen'}
  public filters:FormGroup=new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    activo:new FormControl('')
  });
  public formatters:{[key:string]:Function};

  constructor(_request: RequestService, _data: AsyncDataService,
    _formatter: FormatterService, _store: StoreService,_title: TitleService) {
      super(_request,_data,_store,_title);
      this.formatters={activo:_formatter.activos}
  }
  
}
