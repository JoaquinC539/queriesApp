import { Component,Input, OnInit,OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {saveAs} from 'file-saver';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss']
})
export class ExportCSVComponent implements OnInit,OnDestroy{
  @Input() endpoint:string
  @Input() params:{[key:string]:string }
  public exportURL:string;
  private destroy$=new Subject<void>();

  constructor(private _httpService:RequestService){
    this.endpoint=""
    this.params={};
    this.exportURL=""

  }
  async ngOnInit(): Promise<void> {
   
  }
  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
  async export(){
    this.params['export']='true';
    const request=this._httpService.getIndexExport(this.endpoint,this.params);
    request
    .pipe(takeUntil(this.destroy$))
    .subscribe((data:any)=>{
      const blob:Blob=new Blob([data],{type:'text/csv'});
      saveAs(blob,`${this.endpoint}.csv`);
    })
  }
  
}
