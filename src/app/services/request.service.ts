import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public url:string=environment.apiUrl
  constructor(private _http:HttpClient) {

   }
   public index(route:string,params?:{[key:string]:string}):Observable<any>{
    if(params){
      const queryParams=new URLSearchParams(params)
      return this._http.get(`${this.url}/${route}?${queryParams}`);
    }else{
      return this._http.get(`${this.url}/${route}`);
    }
   }
   

   public indexExport(route:string,params?:{[key:string]:string}){
    const queryParams=new URLSearchParams(params);
    return this._http.get(`${this.url}/${route}?${queryParams}`,{responseType:'text'})
   }

   public getExportUrl(route:string,params?:{[key:string]:string}):string{
    let exportURL:string="";
    const queryParams=new URLSearchParams(params)
    exportURL=`${this.url}/${route}?export=true&${queryParams}`
    return exportURL
   }

   public post(route:string,data:{[key:string]:any},options?:{[key:string]:any}):Observable<any>{
    if(options){
      return this._http.post(`${this.url}/${route}`,data,options)
    }else{
      return this._http.post(`${this.url}/${route}`,data)
    }
    
   }

}
