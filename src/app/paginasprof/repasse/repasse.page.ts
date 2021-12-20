import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-repasse',
  templateUrl: './repasse.page.html',
  styleUrls: ['./repasse.page.scss'],
})
export class RepassePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }


  irParaInicio(){
    this.nav.navigateForward('inicio');
  }
}
