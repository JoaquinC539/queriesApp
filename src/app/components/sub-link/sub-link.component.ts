import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { TitleService } from 'src/app/services/title-service.service';

export interface subMenuData{
  title:string,
  link:string,
  links:Array<linksButton>
}
export interface linksButton{
  buttonText:string;
  link:string;
}

@Component({
  selector: 'app-sub-link',
  templateUrl: './sub-link.component.html',
  styleUrls: ['./sub-link.component.scss']
})
export class SubLinkComponent implements OnInit{
  @Input()data:string|null
  @Input()links:Array<linksButton>|null=[];

  constructor(private _title:TitleService, private _store:StoreService,private route:ActivatedRoute) {
    this.data=route.snapshot.paramMap.get('data');
  }
  ngOnInit(): void {
    if(this.data!==null){
      this.links=this._store.getSubMenuData(this.data).links;
      this._title.setTitle();
    }else{
      this.links=this._store.subMenuGeneralData.links;
      this._title.setTitle();
      console.debug("else");
    }
  }

}
