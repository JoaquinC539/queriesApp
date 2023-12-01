import { Injectable,OnInit } from '@angular/core';
import { AsyncDataService } from './async-data.service';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor(private _data:AsyncDataService, private _request:RequestService) { }

  ngOnInit(){
    
  }
  public  async parseObjectTable(columnsMap:{[key:string]:string},data:{[key:string]:any}[],formatter?:{[key:string]:any}):Promise<any[]>{
    const objectKeys=Object.keys(columnsMap);
    const rows:Array<Array<any>>=[];
    for(let i:number=0;i<data.length;i++){
      const dataArray:Array<any>=[];
      for(let k=0;k<objectKeys.length;k++){
        const key:string=objectKeys[k];
        const valueKey=columnsMap[key];
        let value:string | number | boolean=""
        value=data[i][valueKey]!==undefined ? data[i][valueKey]:columnsMap[key];
        if(formatter){
          if(formatter[valueKey]){
            const formatFunction=formatter[valueKey];
            value=await formatFunction(value);
          }
        }
        dataArray.push(value);
      }
      rows.push(dataArray);
    }
    return rows
  }

  public  parseObservableObjectTable(columnsMap:{[key:string]:string},data:{[key:string]:any}[],formatter?:{[key:string]:any}): Observable<any> {
  return new Observable( observer => {
        const objectKeys=Object.keys(columnsMap);
        const rows:Array<Array<any>>=[];
        for(let i:number=0;i<data.length;i++){
            const dataArray:Array<any>=[];
            for(let k=0;k<objectKeys.length;k++){
                const key:string=objectKeys[k];
                const valueKey=columnsMap[key];
                let value:string | number | boolean=""
                value=data[i][valueKey]!==undefined ? data[i][valueKey]:columnsMap[key];
                if(formatter){
                  if(formatter[valueKey]){
                    const formatFunction=formatter[valueKey];
                    value= formatFunction(value);
                  }
                }
                dataArray.push(value);
            }
           rows.push(dataArray) 
        }
        observer.next(rows);
        observer.complete();
    });
  }
}
