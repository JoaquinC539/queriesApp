import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { RequestService } from './services/request.service';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ListComponent } from './components/list/list.component';
import { ExportCSVComponent } from './components/export-csv/export-csv.component';


const routes: Routes = [
  //Routes in object path and component
  {path:'',component:DashboardComponent},
  {path:'index',component:DashboardComponent},
  {path:'facturas',component:FacturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents:Array<any>=[DashboardComponent,FacturasComponent,
  TitleBarComponent,TableComponent,PaginatorComponent,ListComponent,ExportCSVComponent];
export const routingWithProviders:Array<any>=[RequestService];
