import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CompteComponent } from './compte/compte.component';
import { ProduitsComponent } from './produits/produits.component';
import { AuthGuard } from './auth.guard';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {path:'',component:AccueilComponent},
  {path:'connexion',component:LoginComponent},
  {path:'compte',component:CompteComponent},
  {path: 'produits', canActivate: [AuthGuard], loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    CompteComponent,
    ProduitsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot ([PanierState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
