import { Injectable } from '@angular/core';

interface Object{
  [key:string]:any
}
interface Params{
  [key:string]:any;
}

interface ColumnMap{
  [key:string]:string;
}
interface DataItem{
  [key:string]:any;
}
interface FormatterMap{
  [key:string]:any;
}

export interface StoreList{
  columnMap:ColumnMap,
  data:Array<Object>,
  count:number,
  params:Params,
  formatter?:FormatterMap,
  endpoint:string
}



@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public storeListData:StoreList={
    columnMap:{},
    data:[{}],
    count:0,
    params:{},
    endpoint:''};
  constructor() { }
}
