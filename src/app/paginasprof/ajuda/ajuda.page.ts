import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  irParaInicio(){
    this.nav.navigateForward('inicio');
  }

}
