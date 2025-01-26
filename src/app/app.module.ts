import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IndexComponent } from './pages/index/index.component';
import { LayoutPublicoComponent } from './pages/layout-publico/layout-publico.component';
import { appConfig } from './app.config';
import { PrimengModule } from './primeng/primeng.module';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { AfiliacionesComponent } from './pages/afiliaciones/afiliaciones.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LayoutPublicoComponent,
    ContactanosComponent,
    PerfilComponent,
    LoginComponent,
    AfiliacionesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [
    provideAnimationsAsync(),
    ...appConfig.providers
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
