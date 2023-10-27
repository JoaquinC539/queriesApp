import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {

  constructor() { }

  public formatDate(date:Date | string){
    let datejs=new Date(date);
        return datejs.toLocaleDateString("es-MX");
  }
  public formatNumber(value:number | string):string{
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    if (isNaN(value)) {
      return '$0';
    }
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  public tipoNumero(value:string|number){
    if(isNaN(Number(value))){
      return '$0';
    }
    return '$'+Number(value)
  }
  
}
