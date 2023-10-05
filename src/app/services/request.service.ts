import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url:string=environment.apiUrl
  constructor(public _http:HttpClient) {

   }
   public getFacturasIndex(){
    return this._http.get(`${this.url}/factura`);
   }

}
