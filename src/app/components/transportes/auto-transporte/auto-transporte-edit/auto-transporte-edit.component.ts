import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,  } from '@angular/router';
import { BaseEditComponent } from 'src/app/class/BaseEditComponent';
import { RequestService } from 'src/app/services/request.service';
import { SelectOptions, StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-auto-transporte-edit',
  templateUrl: './auto-transporte-edit.component.html',
  styleUrls: ['./auto-transporte-edit.component.scss']
})
export class AutoTransporteEditComponent extends BaseEditComponent implements AfterViewInit {
  override id: string='';
  override form: FormGroup<any>;
  override endpointGet: string='autoTransporte';
  override linkCancel: string='/autoTransporte';
  override endpointPut: string='autoTransporte';
  public configVehicular:Array<SelectOptions>=[];
  constructor( _store:StoreService,route:ActivatedRoute,_request:RequestService,_router:Router){
    super(_store,route,_request,_router)
    this.form=new FormGroup({
      _id:new FormControl(''),
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
      this.form.get('_id')?.disable()
  }

  

}
