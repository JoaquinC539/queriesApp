import { EventEmitter, Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titleChanged=new EventEmitter<string[]>();
  constructor(private _store:StoreService) { }

  setTitle(){
    const titleData:Array<string>=[this._store.titles.title,this._store.titles.link]
    this.titleChanged.emit(titleData);
  }
  
}
