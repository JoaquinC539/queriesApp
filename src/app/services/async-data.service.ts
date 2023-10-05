import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncDataService {
  servedData=new EventEmitter<any>()
  constructor() { }
  public passAsyncData(data:any){
    this.servedData.emit(data)
  }
}
