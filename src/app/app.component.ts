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

  sair() {
    this.login.sair();
    this.nav.navigateForward('home');
  }
}
