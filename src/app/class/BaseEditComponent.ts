import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute,Params } from "@angular/router";
import { RequestService } from "../services/request.service";
import { Subject, takeUntil } from 'rxjs';
import { StoreService } from "../services/store.service";
@Component({
    template:''
})
export abstract class BaseEditComponent implements OnInit,OnDestroy{
    abstract id:string;
    abstract form:FormGroup
    abstract endpointGet:string
    abstract linkCancel:string
    abstract endpointPut:string
    private destroy$=new Subject<void>()
    
    constructor(protected _store:StoreService,protected route:ActivatedRoute, protected _http:RequestService){}

    ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
            this.id=params['id'];
            this.getData();
          })
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this._store.clearEM();
    }
    private getData(){
        this._http.get(this.endpointGet,this.id).pipe(takeUntil(this.destroy$))
        .subscribe((data)=>{
            this.form.patchValue(data)
        })
    }
    public submit(){
        if(this.form.valid){
            this._http.put(this.endpointPut,this.id,this.form.value)
            .subscribe((response)=>{
                this._store.message.active=true;
                this._store.message.message="Actualizado con exito";
            })
            
        }else{
            this._store.error['active']=true;
            this._store.error['error']="Forma no valida";
        }
    }
}