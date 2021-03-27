import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes : Routes = [
  {path:'',component:AccueilComponent},
  {path: 'produits', canActivate: [AuthGuard], loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
