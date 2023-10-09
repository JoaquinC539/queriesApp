import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url:string=environment.apiUrl
  constructor(private _http:HttpClient) {

   }
   public getFacturasIndex(route:string,params?:{[key:string]:string}):Observable<any>{
    
    if(params){
      const queryParams=new URLSearchParams(params)
      return this._http.get(`${this.url}/${route}?${queryParams}`);
    }else{
      return this._http.get(`${this.url}/${route}`);
    }
   
   }

}
