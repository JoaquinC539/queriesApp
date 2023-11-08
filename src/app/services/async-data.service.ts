import { EventEmitter, Injectable } from '@angular/core';
import { StoreList } from './store.service';
import { Subject } from 'rxjs';

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
  public changeEmitter=new EventEmitter<boolean>();
  public destroy$=new Subject<void>()
  public filterEmitter=new EventEmitter<boolean>();
  constructor() { }
  
  public passListAsyncData(data:StoreList){
    this.emitterDataList.emit(data)
  }
  
  public passChange(value:boolean){
    this.changeEmitter.emit(value)
  } 
  public passFilter(value:boolean){
    this.filterEmitter.emit(value)
  }
  
}
