import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseCreateComponent } from 'src/app/class/BaseCreateComponent';
import { RequestService } from 'src/app/services/request.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-almacen-create',
  templateUrl: './almacen-create.component.html',
  styleUrls: ['./almacen-create.component.scss']
})
export class AlmacenCreateComponent extends BaseCreateComponent{
  override form:FormGroup;
  override endpoint: string="almacen";
  override redirect: string='/almacen';
  constructor( _request:RequestService,  router:Router, _store:StoreService){
    super(_store,router,_request)
    this.form=new FormGroup({
      nombre:new FormControl('',Validators.required),
      rfc:new FormControl('',Validators.required),
      direccion:new FormControl('',Validators.required)
    })
  }
  
  
}
