import { Component,Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss']
})
export class ExportCSVComponent implements OnInit{
  @Input() endpoint:string
  @Input() params:{[key:string]:string }
  public exportURL:string;

  constructor(private _httpService:RequestService){
    this.endpoint=""
    this.params={};
    this.exportURL=""

  }
  async ngOnInit(): Promise<void> {
    
    // this.exportURL=this._httpService.getExportUrl(this.endpoint,this.params);
    
      
  }
  async export(){
    this.params['export']='true';
    const request=this._httpService.getIndexExport(this.endpoint,this.params);
    request.subscribe((data:any)=>{
      const blob:Blob=new Blob([data],{type:'text/csv'});
      saveAs(blob,'factura.csv');
    })
  }
  
}
