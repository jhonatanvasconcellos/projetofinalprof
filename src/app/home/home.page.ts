import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController) { }
  irParaLogin() {
    console.log('Funcão irParaLogin');
    this.nav.navigateForward('loginprof');
  }
  irParaRegistro() {
    console.log('Funcão irParaCadastro');
    this.nav.navigateForward('cadastroprof');
  }
}
