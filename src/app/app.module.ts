import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CompteComponent } from './compte/compte.component';
import { ProduitsComponent } from './produits/produits.component';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { AuthGuard } from './auth.guard';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state'

const appRoutes : Routes = [
  {path:'',component:AccueilComponent},
  {path:'compte',component:CompteComponent},
  {path:'produits/catalogue',component:CatalogueComponent},
  {path: 'produits', canActivate: [AuthGuard], loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    CompteComponent,
    ProduitsComponent,
    CatalogueComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot ([PanierState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
