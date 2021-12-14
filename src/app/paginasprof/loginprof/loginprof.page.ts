import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AutenticacaoService } from '../../autenticacao.service';
@Component({
  selector: 'app-loginprof',
  templateUrl: './loginprof.page.html',
  styleUrls: ['./loginprof.page.scss'],
})
export class LoginprofPage implements OnInit {
  email: string;
  senha: string;

  constructor(private nav: NavController,
    private login: AutenticacaoService,
    private alerta: AlertController) { }

  irParaInicio() {
    console.log('Funcão irParaInicio');
    this.nav.navigateForward('inicio');

  } irParaHome() {
    console.log('Funcão irParaHome');
    this.nav.navigateForward('home');
  }

  ngOnInit() {
  }
  async logar() {
    console.log("função Logar");
    let usuario = {};
    usuario["email"] = this.email;
    usuario["senha"] = this.senha;



    this.login.logar(usuario).then(
      resolves => {
        this.nav.navigateForward("inicio");
      },
      errors => {
        console.log(errors.code);
        this.mensagemErro();
      }
    );

  }
  async mensagemErro() {

    let msg = await this.alerta.create({
      header: "Atenção",
      message: "Usuario ou Senha Inválidos",
      buttons: ["ok"]
    });
    await msg.present();
  }


}
