import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { RequestService } from './services/request.service';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { ExportCSVComponent } from './components/export-csv/export-csv.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { AlmacenCreateComponent } from './components/almacen/almacen-create/almacen-create.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AlmacenEditComponent } from './components/almacen/almacen-edit/almacen-edit.component';
import { SubLinkComponent } from './components/sub-link/sub-link.component';
import { ConfAutoTransporteComponent } from './components/transportes/conf-auto-transporte/conf-auto-transporte.component';
import { AutoTransporteComponent } from './components/transportes/auto-transporte/auto-transporte.component';
import { ConfTransporteCreateComponent } from './components/transportes/conf-auto-transporte/conf-transporte-create/conf-transporte-create.component';
import { ConfTransporteEditComponent } from './components/transportes/conf-auto-transporte/conf-transporte-edit/conf-transporte-edit.component';
import { AutoTransporteEditComponent } from './components/transportes/auto-transporte/auto-transporte-edit/auto-transporte-edit.component';
import { AutoTransporteCreateComponent } from './components/transportes/auto-transporte/auto-transporte-create/auto-transporte-create.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'index',component:DashboardComponent},
  {path:'facturas',component:FacturasComponent},
  {path:'almacen',component:AlmacenComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'almacen/create',component:AlmacenCreateComponent},
  {path:'almacen/:id',component:AlmacenEditComponent},
  {path:'subMenu',component:SubLinkComponent},
  {path:'confAutoTransporte',component:ConfAutoTransporteComponent},
  {path:'confAutoTransporte/create',component:ConfTransporteCreateComponent},
  {path:'confAutoTransporte/:id',component:ConfTransporteEditComponent},
  {path:'autoTransporte',component:AutoTransporteComponent},
  {path:"autoTransporte/create",component:AutoTransporteCreateComponent},
  {path:"autoTransporte/:id",component:AutoTransporteEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
export const routingComponents:Array<any>=[DashboardComponent,FacturasComponent,
  TitleBarComponent,TableComponent,ListComponent,ExportCSVComponent,AlmacenComponent,PedidosComponent,
  CreateButtonComponent,AlmacenCreateComponent,PaginationComponent,AlmacenEditComponent,SubLinkComponent,
  ConfAutoTransporteComponent,AutoTransporteComponent,ConfTransporteCreateComponent,ConfTransporteEditComponent,AutoTransporteCreateComponent,
  AutoTransporteEditComponent];
export const routingWithProviders:Array<any>=[RequestService];
