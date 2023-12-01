import { Component,AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseCreateComponent } from 'src/app/class/BaseCreateComponent';
import { RequestService } from 'src/app/services/request.service';
import { SelectOptions, StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-auto-transporte-create',
  templateUrl: './auto-transporte-create.component.html',
  styleUrls: ['./auto-transporte-create.component.scss']
})
export class AutoTransporteCreateComponent extends BaseCreateComponent implements AfterViewInit{
  override form: FormGroup<any>;
  override endpoint: string='autoTransporte';
  override redirect: string='/autoTransporte';
  public configVehicular:Array<SelectOptions>=[];
  constructor(_request:RequestService,  router:Router, _store:StoreService){
    super(_store,router,_request);
    this.form=new FormGroup({
      nombre: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
    anioModeloVM: new FormControl('',Validators.required),
    aseguraRespCivil: new FormControl('',Validators.required),
    configVehicular: new FormControl('',Validators.required),
    numPermisoSCT: new FormControl('',Validators.required),
    permSCT: new FormControl('',Validators.required),
    placaVM: new FormControl('',Validators.required),
    polizaRespCivil: new FormControl('',Validators.required)
    })
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
