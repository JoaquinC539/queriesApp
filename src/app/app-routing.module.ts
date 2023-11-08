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



const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'index',component:DashboardComponent},
  {path:'facturas',component:FacturasComponent},
  {path:'almacen',component:AlmacenComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'almacen/create',component:AlmacenCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
export const routingComponents:Array<any>=[DashboardComponent,FacturasComponent,
  TitleBarComponent,TableComponent,ListComponent,ExportCSVComponent,AlmacenComponent,PedidosComponent,
  CreateButtonComponent,AlmacenCreateComponent,PaginationComponent];
export const routingWithProviders:Array<any>=[RequestService];
