import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './Componentes/pages/inicio/inicio.component';
import {GaleriaComponent} from './Componentes/pages/galeria/galeria.component';
import {DatosComponent} from './Componentes/pages/datos/datos.component'
import{DetallerComponent} from './Componentes/pages/datos/detaller/detaller.component'
            const routes: Routes = [
              {path:'Inicio',component:InicioComponent},
              {path:'Galeria',component:GaleriaComponent},
              {path:'Datos', component:DatosComponent},
              {path:'Detalle/Id', component:DetallerComponent},
              {path:'**',component:InicioComponent}
            ]

                @NgModule({
                     imports: [RouterModule.forRoot(routes)],
                  exports:[RouterModule]
})
export class AppRoutingModule { }
