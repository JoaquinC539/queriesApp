import { Injectable } from '@angular/core';
import { subMenuData } from '../components/sub-link/sub-link.component';

interface Object{
  [key:string]:any
}
interface Params{
  [key:string]:any;
}

export interface StoreService{
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

export interface SelectOptions{
  value:string,
  name:string
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
  public subMenuGeneralData:subMenuData={
    title:'',
    link:'',
    links:[]
  }
  public autoTranpsorteSubMenu:subMenuData={
    title:'AutoTransportes',
    link:'/subMenu',
    links:[{link:'/confAutoTransporte',buttonText:'Ir a Configuración de AutoTransportes'},{link:'/autoTransporte',buttonText:'Ir a AutoTransportes'}]
  }
  public  clearEM():void{
    this.error.active=false;
    this.error.error='';
    this.error.type='';
    this.message.active=false;
    this.message.message='';
  }
  public getSubMenuData(reference:string):subMenuData{
    const data:subMenuData=this[reference];
    this.subMenuGeneralData=data;
    this.titles.title=data.title;
    this.titles.link=data.link;
    return  this.subMenuGeneralData;
  }
  

  constructor() { }
}
