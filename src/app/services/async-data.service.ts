import { EventEmitter, Injectable } from '@angular/core';

interface ColumnMap{
  [key:string]:string;
}
interface DataItem{
  [key:string]:any;
}
interface FormatterMap{
  [key:string]:any;
}
interface PaginatorData{
  documentsLength:number,
  count:number
}
@Injectable({
  providedIn: 'root'
})
export class AsyncDataService {
  public emitterDataList=new EventEmitter<any>();
  public paginatorEmitter=new EventEmitter<any>();
  public changeEmitter=new EventEmitter<boolean>();
  constructor() { }
  
  public passListAsyncData(data:[ColumnMap,DataItem[],FormatterMap,PaginatorData]){
    this.emitterDataList.emit(data)
  }
  public passReQueryPaginator(data:{[key:string]:number}){
    this.paginatorEmitter.emit(data);
  }
  public passChange(){
    this.changeEmitter.emit(true)
    this.changeEmitter.emit(false)
  } 
  
}
