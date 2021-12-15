import { Component, OnInit } from '@angular/core';
import { DadoscliService } from '../../dadoscli.service';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../../autenticacao.service';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.page.html',
  styleUrls: ['./meusdados.page.scss'],
})
export class MeusdadosPage implements OnInit {
  dados: any;
  emailLogado: string;
  constructor(private service: DadoscliService,
              private autenticacao: AutenticacaoService,
              private nav:NavController) { }

  ngOnInit() {
    this.autenticacao.logado().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.emailLogado = res.email;
        console.log(this.emailLogado);
      } else {
      }
    }, err => {
      console.log('err', err);
    })


    this.service.listDados().subscribe (data=>{
      this.dados = data.map(e =>{
        return{
          id: e.payload.doc.id,
          nomeprof: e.payload.doc.data()['nome_prof'],
          telprof: e.payload.doc.data()['tel_prof'],
          agencia: e.payload.doc.data()['Ag_banco'],
          conta: e.payload.doc.data()['conta_banco'],
          email: e.payload.doc.data()['email']
        }
      })
    })

  }

  irParaInicio(){
    this.nav.navigateForward('inicio');
  }

}
