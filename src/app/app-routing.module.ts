import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ButtonDemoComponent } from './pages/button-demo/button-demo.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { AfiliacionesComponent } from './pages/afiliaciones/afiliaciones.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },    
  { path: 'boton', component: ButtonDemoComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'afiliaciones', component: AfiliacionesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
