import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-almacen-create',
  templateUrl: './almacen-create.component.html',
  styleUrls: ['./almacen-create.component.scss']
})
export class AlmacenCreateComponent implements OnInit{
  form:FormGroup;
  response:any
  constructor(private _request:RequestService, private router:Router){
    this.form=new FormGroup({
      nombre:new FormControl('',Validators.required),
      rfc:new FormControl('',Validators.required),
      direccion:new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
      
  }
  public onSubmit(){
    if(this.form.valid){
      console.log("valido: ",this.form.value)
      const post=this._request.post('almacen',this.form.value).subscribe((response:any)=>{
        this.response=response
        this.router.navigate(['/almacen'])
      },
      (err)=>{
        console.error(err)
      },
      ()=>{
        console.log("Completa")
      });
      
    }else{
      console.log("No valido")
      
    }
  }
}
