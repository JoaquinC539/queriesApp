import { Injectable,OnInit } from '@angular/core';
import { AsyncDataService } from './async-data.service';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor(private _data:AsyncDataService) { }

  ngOnInit(){
    
  }
  public parseObjectTable(columnsMap:{[key:string]:string},data:{[key:string]:any}[],formatter?:{[key:string]:any}){
    const rows:Array<Array<any>>=[];
    for(let i:number=0;i<data.length;i++){
      const dataArray:Array<any>=[];
      const objectKeys=Object.keys(columnsMap);
      for(let k=0;k<objectKeys.length;k++){
        const key:string=objectKeys[k];
        const valueKey=columnsMap[key]
        let value:string | number | boolean=data[i][valueKey] ? data[i][valueKey]:columnsMap[key];
        if(formatter){
          if(formatter[valueKey]){
            const formatFunction=formatter[valueKey];
            value=formatFunction(value);
          }
        }
        dataArray.push(value);
      }
      rows.push(dataArray);
    }
    return rows
  }
}
