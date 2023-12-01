import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,  } from '@angular/router';
import { BaseEditComponent } from 'src/app/class/BaseEditComponent';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-conf-transporte-edit',
  templateUrl: './conf-transporte-edit.component.html',
  styleUrls: ['./conf-transporte-edit.component.scss']
})
export class ConfTransporteEditComponent extends BaseEditComponent {
  override id: string='';
  override form: FormGroup<any>;
  override endpointGet: string='/configTransporte';
  override linkCancel: string='/confAutoTransporte';
  override endpointPut: string='/configTransporte';

  constructor( _store:StoreService,route:ActivatedRoute,_request:RequestService,_router:Router){
    super(_store,route,_request,_router)
    this.form=new FormGroup({
      nombre:new FormControl('',Validators.required)
    })
  }

}
