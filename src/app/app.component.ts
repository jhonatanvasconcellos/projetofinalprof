import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private nav: NavController,
    private login: AutenticacaoService
  ) { }

  irParaDados(){
    console.log('Função irParaDados');
    this.nav.navigateForward('meusdados');
  }
  irParaChat(){
    console.log('Funcão irParaChat');
    this.nav.navigateForward('chat');
  }
  irParaHistorico(){
    console.log('Funcão irParaHistorico');
    this.nav.navigateForward('historico');
  }
  irParaRepasse(){
    console.log('Funcão irParaRepasse');
    this.nav.navigateForward('repasse');
  }
  irParaAjuda(){
    console.log('Funcão irParaAjuda');
    this.nav.navigateForward('ajuda');
  }
  irParaConfig(){
    console.log('Funcão irParaConfig');
    this.nav.navigateForward('configuracao');
  } sair(){
    this.login.sair();
    this.nav.navigateForward('home');
  }
}
