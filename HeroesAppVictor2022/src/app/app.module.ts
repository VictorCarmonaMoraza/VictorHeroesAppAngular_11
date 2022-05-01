//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulo externo de angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

//TRabajar con servicios
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
