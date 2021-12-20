import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  irParaInicio(){
    this.nav.navigateForward('inicio');
  }
}
