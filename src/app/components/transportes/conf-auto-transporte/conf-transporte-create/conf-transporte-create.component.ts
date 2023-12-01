import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseCreateComponent } from 'src/app/class/BaseCreateComponent';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-conf-transporte-create',
  templateUrl: './conf-transporte-create.component.html',
  styleUrls: ['./conf-transporte-create.component.scss']
})
export class ConfTransporteCreateComponent  extends BaseCreateComponent {
  override form: FormGroup<any>;
  override endpoint: string='configTransporte';
  override redirect: string='/confAutoTransporte';
  constructor(_request:RequestService,  router:Router, _store:StoreService){
    super(_store,router,_request);
    this.form=new FormGroup({
      nombre:new FormControl('',Validators.required),
      clave:new FormControl('',Validators.required)
    })
  }

}
