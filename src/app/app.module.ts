import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { InicioComponent } from './Componentes/pages/inicio/inicio.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { GaleriaComponent } from './Componentes/pages/galeria/galeria.component';
import { DatosComponent } from './Componentes/pages/datos/datos.component';
import { MapasComponent } from './component/mapas/mapas.component';

import { HttpClientModule } from '@angular/common/http';
import { DetallerComponent } from './Componentes/pages/datos/detaller/detaller.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    GaleriaComponent,
    DatosComponent,
    MapasComponent,
    DetallerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
