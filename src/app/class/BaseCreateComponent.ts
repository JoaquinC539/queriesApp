import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../services/request.service";
import { Subject,  takeUntil } from 'rxjs';
import { StoreService } from "../services/store.service";

@Component({
    template:''
})
export abstract class BaseCreateComponent implements OnInit,OnDestroy{
    abstract form:FormGroup;
    abstract endpoint:string;
    abstract redirect:string

    constructor(protected _store:StoreService,protected router:Router, protected _http:RequestService){}
    private destroy$=new Subject<void>();

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this._store.clearEM();
    }

    ngOnInit(): void {
        
    }

    public onSubmit(){
        if(this.form.valid){
          this._http.post(this.endpoint,this.form.value).subscribe((response:any)=>{
            this.router.navigate([this.redirect])
          },
          (err)=>{
            this._store.error.active=true;
            this._store.error.error=err.message
          }
          );
        }else{
          this._store.error.active=true;
          this._store.error.error="Forma no valida"
          
        }
      }

}