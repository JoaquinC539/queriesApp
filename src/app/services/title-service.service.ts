import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titleChanged=new EventEmitter<string[]>();

  setTitle(newTitle:string,linkComponent:string){
    const titleData:Array<string>=[newTitle,linkComponent]
    this.titleChanged.emit(titleData);
  }
  constructor() { }
}
