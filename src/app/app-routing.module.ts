import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './Componentes/pages/inicio/inicio.component';
import {GaleriaComponent} from './Componentes/pages/galeria/galeria.component';


            const routes: Routes = [
              {path:'Inicio',component:InicioComponent},
              {path:'Galeria',component:GaleriaComponent},
              {path:'**',component:InicioComponent},
            ]

                @NgModule({
                     imports: [RouterModule.forRoot(routes)],
                  exports:[RouterModule]
})
export class AppRoutingModule { }
