import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FacturasComponent } from './components/facturas/facturas.component';

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
export const routingComponents:Array<any>=[DashboardComponent,FacturasComponent];
export const routingWithProviders:Array<any>=[];
