import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncDataService {
  public emitterDataList=new EventEmitter<any>();
  public paginatorEmitter=new EventEmitter<any>();
  public changeEmitter=new EventEmitter<boolean>();
  constructor() { }
  public passListAsyncData(data:any){
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
