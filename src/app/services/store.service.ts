import { Injectable } from '@angular/core';

interface Object{
  [key:string]:any
}
interface Params{
  [key:string]:any;
}

export interface IColumnMap{
  [key:string]:string,
  
}
export interface DataItem{
  [key:string]:any;
}
interface FormatterMap{
  [key:string]:any;
}

export interface Action{
  htmlTag:string,
  function:Function,
  tooltip?:string
}

export interface StoreList{
  columnMap:IColumnMap,
  data:Array<Object>,
  count:number,
  params:Params,
  formatter?:FormatterMap,
  endpoint:string,
  actions?:Array<Action>
  
}
export interface Titles{
  title:string,
  link:string,
}

export interface Error{
  active:boolean;
  error:string;
  type?:string;
}
export interface Message{
  active:boolean;
  message:string;

}



@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public storeListData:StoreList={
    columnMap:{link:''},
    data:[{}],
    count:0,
    params:{},
    endpoint:''};

  public titles:Titles={
    title:"Dashboard",
    link:'/'
  };
  public error:Error={
    active:false,
    error:'',
    type:''
  }
  public  message:Message={
    active:false,
    message:''
  }
  public  clearEM():void{
    this.error.active=false;
    this.error.error='';
    this.error.type='';
    this.message.active=false;
    this.message.message='';
  }
  

  constructor() { }
}
