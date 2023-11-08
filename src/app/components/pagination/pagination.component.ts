import { Component, Input,OnInit,OnDestroy,ChangeDetectorRef, OnChanges } from '@angular/core';
import { of } from 'rxjs';
import { AsyncDataService } from 'src/app/services/async-data.service';
import { StoreList, StoreService } from 'src/app/services/store.service';


interface Data{
  [key:string]:any;
}
interface Params{
  [key:string]:any;
}
interface Count{
  [Count:string]:number;
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit,OnDestroy,OnChanges{
  @Input('data') data:[Data[],number,Params]=[[{}],0,{}];
  documents:Data[]=[]
  page:number=1;
  count:number=0;
  params:Params={};
  documentsPerPage:number=15;
  offset:number=0;
  
  constructor(private _data:AsyncDataService, private _store:StoreService){
  }

  ngOnInit(): void {
    this._data.emitterDataList.subscribe((data:StoreList)=>{
      this.documents=data.data;
      this.count=data.count;
      this.params=data.params
    });
    this._data.filterEmitter.subscribe((data:boolean)=>{
      if(data){
        this.onFilter();
      }
    })
    
  }
  ngOnDestroy(): void {
      
  }
  ngOnChanges(){
  }
  onPageChange(page:any){
    this.page=page
    this.offset=this.calculateOffset(this.documentsPerPage,this.page)
    this._store.storeListData.params['max']=this.documentsPerPage;
    this._store.storeListData.params['offset']=this.calculateOffset(this.documentsPerPage,this.page);
    this._data.passChange(true);
  }
  calculateOffset(documentsPerPage:number,page:number):number{
    let offset=0;
    offset=documentsPerPage*(page-1)
    return offset
  }
  onDocumentsPerPageChange(newDocumentsPerPage: number) {
    this.documentsPerPage = newDocumentsPerPage;
    this.offset = this.calculateOffset(this.documentsPerPage, this.page);
    this._store.storeListData.params['max'] = this.documentsPerPage;
    this._store.storeListData.params['offset'] = this.calculateOffset(this.documentsPerPage, this.page);
    this._data.passChange(true);
  }
  onFilter(){
    this._store.storeListData.params['max'] = this.documentsPerPage;
    this._store.storeListData.params['offset'] = this.calculateOffset(this.documentsPerPage, this.page);
    this._data.passChange(true)
  }

  
  
}
