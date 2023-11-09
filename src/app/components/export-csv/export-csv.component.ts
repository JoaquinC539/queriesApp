import { Component,Input, OnInit,OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {saveAs} from 'file-saver';
import { Subject, takeUntil } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss']
})
export class ExportCSVComponent implements OnInit,OnDestroy{
  // @Input() endpoint:string
  public exportURL:string;
  private destroy$=new Subject<void>();

  constructor(private _httpService:RequestService,private _store:StoreService){
    // this.endpoint=""
    
    this.exportURL=""

  }
  async ngOnInit(): Promise<void> {
   
  }
  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
  async export(){
    // this.params['export']='true';
    const params:{[key:string]:string }={...this._store.storeListData.params}
    params['export']="true";
    const request=this._httpService.indexExport(this._store.storeListData.endpoint,params);
    request
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
      const blob:Blob=new Blob([data],{type:'text/csv'});
      saveAs(blob,`${this._store.storeListData.endpoint}.csv`);
    })
  }
  
}
