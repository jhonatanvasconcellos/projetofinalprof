import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DadoscliService } from '../../dadoscli.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  servicos:any;
  constructor(private nav: NavController,
              private service: DadoscliService) { }

  ngOnInit() {
    this.service.listarservico().subscribe(data =>{
      this.servicos = data.map(e => {
        return{
          id: e.payload.doc.id,
          tipoChamado: e.payload.doc.data()['area_cham'],
          desChamado: e.payload.doc.data()['desc_cham'],
          tempoChamado: e.payload.doc.data()['tempoutil_cham'],
          urgenciaChamado: e.payload.doc.data()['urgencia_cham'],

        }
      })
    })
  
  }


  irParaInicio(){
    this.nav.navigateForward('inicio');
  }
}
