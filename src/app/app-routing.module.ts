import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginprof',
    loadChildren: () => import('./paginasprof/loginprof/loginprof.module').then( m => m.LoginprofPageModule)
  },
  {
    path: 'cadastroprof',
    loadChildren: () => import('./paginasprof/cadastroprof/cadastroprof.module').then( m => m.CadastroprofPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginasprof/inicio/inicio.module').then( m => m.InicioPageModule)
  },  {
    path: 'cadastroprof2',
    loadChildren: () => import('./paginasprof/cadastroprof2/cadastroprof2.module').then( m => m.Cadastroprof2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
