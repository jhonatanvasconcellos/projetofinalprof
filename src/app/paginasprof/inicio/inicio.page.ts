import { Component, OnInit } from '@angular/core';
import { DadoscliService } from '../../dadoscli.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  servicos:any;
  constructor(private service:DadoscliService,) { }

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



  }




