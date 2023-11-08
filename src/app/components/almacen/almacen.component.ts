import { Component} from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { FormControl,FormGroup} from '@angular/forms';
import { FormatterService } from 'src/app/services/formatter.service';
import { StoreService } from 'src/app/services/store.service';
import { BaseListComponent } from 'src/app/class/BaseListComponent';

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
  public filters:FormGroup=new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    activo:new FormControl('')
  });

  constructor(_request: RequestService, _data: AsyncDataService,
    _formatter: FormatterService, _store: StoreService) {
      super(_request,_data,_formatter,_store)
  }
  
}
