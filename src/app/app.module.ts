import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents,routingWithProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileSaverModule } from 'ngx-filesaver';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileSaverModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  // exports:[
  //   ReactiveFormsModule
  // ],
  providers: [routingWithProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

