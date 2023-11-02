import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListaUsuariosComponent } from './lista-usuario/lista-usuario.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: '', component: InicioSesionComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent }, 
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
