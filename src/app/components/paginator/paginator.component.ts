import { Component,EventEmitter,OnDestroy,OnInit,Input } from '@angular/core';
import { Subject, of, takeUntil } from 'rxjs';
import { AsyncDataService } from 'src/app/services/async-data.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit,OnDestroy{
  public data:{[key:string]:any}={}
  public paginatorTabs:Array<number>
  public max:number
  public remainingDocuments:number
  public count:number
  public steps:number
  public offset:number
  public paginatorCurrentPage:number
  public tabsPerPage:number
  public paginatorParams:{[key:string]:number}
  @Input() public dataSubcription:EventEmitter<any>
  public paginatorEmitter:any
  private destroy$=new Subject<void>()
  constructor(private _data:AsyncDataService) {
    this.dataSubcription=this._data.emitterDataList;
    this.count=0;
    this.steps=0;
    this.paginatorCurrentPage=1;
    this.paginatorTabs=[];
    this.max=15;
    this.tabsPerPage=4;
    this.remainingDocuments=0;
    this.offset=0;
    this.paginatorParams={};
  }

  ngOnInit(){
   this.dataSubcription
   .pipe(takeUntil(this.destroy$))
   .subscribe((data:any)=>{
    this.data=data[3];
    this.max=this.data['documentsLength'];
    this.count=this.data['count'];
    this.remainingDocuments=this.count-this.max;
    const numberTabs:number=Math.ceil(this.remainingDocuments/this.max);
    this.paginatorTabs = Array.from({ length: numberTabs }, (_, i) => i + 1);
   }); 
  }
  emitChange(max?:number,offset?:number){
    if(max!==undefined){
      this.max=max;
      this.paginatorParams['max']=this.max
    }
    if(offset!==undefined){
      this.offset=offset;
      this.paginatorParams['offset']=this.offset
    }
    this._data.passReQueryPaginator(this.paginatorParams)
  }


  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  get displayedTabs():number[]{
    const tabsToShow:number[]=[];
    if(this.paginatorCurrentPage===1){
      for(let i=1;i<=this.tabsPerPage;i++){
        tabsToShow.push(i)
      }
      tabsToShow.push(-1)
    }else{
      tabsToShow.push(this.paginatorCurrentPage-1)
      for(let i=this.paginatorCurrentPage;i<=this.paginatorCurrentPage+this.tabsPerPage-1;i++){
        tabsToShow.push(i);
      }
      tabsToShow.push(-1);
    }
    return tabsToShow;
  }
  changePage(page:number):void{
    const offset:number=page*this.max-this.max;
    console.log(offset)
    this.paginatorCurrentPage=page;

    this.emitChange(undefined,offset)

  }
  

}
