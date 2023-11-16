import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  } from '@angular/router';
import { BaseEditComponent } from 'src/app/class/BaseEditComponent';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-almacen-edit',
  templateUrl: './almacen-edit.component.html',
  styleUrls: ['./almacen-edit.component.scss']
})
export class AlmacenEditComponent  extends BaseEditComponent {
  override id:string='';
  override endpointGet: string="/almacen";
  override linkCancel: string="/almacen";
  override endpointPut: string="/almacen";
  form:FormGroup=new FormGroup({
    nombre:new FormControl('',Validators.required)
  });

  constructor( _store:StoreService,route:ActivatedRoute,_request:RequestService){
    super(_store,route,_request)
  }
  

  

}
