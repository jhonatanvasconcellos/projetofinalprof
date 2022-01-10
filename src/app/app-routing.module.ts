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
  {
    path: 'meusdados',
    loadChildren: () => import('./paginasprof/meusdados/meusdados.module').then( m => m.MeusdadosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./paginasprof/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./paginasprof/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'repasse',
    loadChildren: () => import('./paginasprof/repasse/repasse.module').then( m => m.RepassePageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./paginasprof/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./paginasprof/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'edita-dados',
    loadChildren: () => import('./paginasprof/edita-dados/edita-dados.module').then( m => m.EditaDadosPageModule)
  },
  {
    path: 'servicoaberto',
    loadChildren: () => import('./paginasprof/servicoaberto/servicoaberto.module').then( m => m.ServicoabertoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
