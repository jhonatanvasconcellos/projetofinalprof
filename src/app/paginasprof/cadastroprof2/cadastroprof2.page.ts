import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { DadoscliService} from '../../dadoscli.service';
import { ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao.service';


@Component({
  selector: 'app-cadastroprof2',
  templateUrl: './cadastroprof2.page.html',
  styleUrls: ['./cadastroprof2.page.scss'],
})
export class Cadastroprof2Page implements OnInit {
  nome:string;
  telefone:string;
  conta:string;
  agencia:string;

  email: string;
  senha: string;
  constructor(private nav: NavController,
              private service: DadoscliService,
              private login: AutenticacaoService,
              private alerta: AlertController,
            private rota: ActivatedRoute) { }

  ngOnInit() {
    this.email = this.rota.snapshot.params['usr'];
    this.senha = this.rota.snapshot.params['sen'];

  }

  voltar(){
    this.nav.navigateForward('cadastroprof');
  }

  registrar2(){
    let prof = {};
    prof['nome_prof'] = this.nome;
    prof['tel_prof'] = this.telefone;
    prof['conta_banco'] = this.conta;
    prof['Ag_banco'] = this.agencia;

    let usr = {};
    usr['email'] = this.email;
    usr['senha'] = this.senha;

    this.login.registrar(usr).then(
        resolve => {
          this.service.incluirBD(prof);
        },
        error => {
          console.log("Deu ruim");
        }  
      );    

  }
}
