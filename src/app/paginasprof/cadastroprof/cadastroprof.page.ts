import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AutenticacaoService } from '../../autenticacao.service';
import { resolve } from 'q';
import { DadoscliService } from '../../dadoscli.service';

@Component({
  selector: 'app-cadastroprof',
  templateUrl: './cadastroprof.page.html',
  styleUrls: ['./cadastroprof.page.scss'],
})
export class CadastroprofPage implements OnInit {

  email: string;
  senha: string;

  constructor(private nav: NavController,
              private login: AutenticacaoService,
              private service: DadoscliService,
              private alerta: AlertController
  ) { }
  irParaInicio() {
    console.log('Funcão irParaInicio');
    this.nav.navigateForward('inicio');
  }
  irParaHome() {
    console.log('Funcão irParaHome');
    this.nav.navigateForward('home');
  }
  ngOnInit() {

  }
  registrar(){
    let prof = {};
    prof['email'] = this.email;
    prof['senha'] = this.senha;


//    this.login.registrar(prof).then(
//      resolve => {
        /*this.service.incluirBD(prof);*/
     if(this.email != null && this.senha != null ) {   
        this.nav.navigateForward(["cadastroprof2", {
          usr: this.email, sen: this.senha
        }]);

      } else {
        this.exibirMensagem();
      }
//    },
//      error =>{ console.log("Deu erro");
//      this.exibirMensagem();
//  }
//    );
  }
  async exibirMensagem(){
    let msg =  await this.alerta.create({header:"Atenção",
      message:"Preencha todos os campos",
      buttons:["ok"]
    });
    await msg.present();

  }

}
