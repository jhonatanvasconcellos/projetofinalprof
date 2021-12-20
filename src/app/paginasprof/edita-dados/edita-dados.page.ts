import { Component, OnInit } from '@angular/core';
import { DadoscliService } from '../../dadoscli.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-dados',
  templateUrl: './edita-dados.page.html',
  styleUrls: ['./edita-dados.page.scss'],
})
export class EditaDadosPage implements OnInit {

  email:string;
  nomeprof:string;
  telprof:string;
  agencia:string;
  conta:string;
  banco:string;
  
  id:string;

  constructor(private service:DadoscliService,
              private nav: NavController,
              private rota:ActivatedRoute) { }

  ngOnInit() {
   
    this.nomeprof = this.rota.snapshot.params["nomeprof"];
    this.telprof = this.rota.snapshot.params["telprof"];
    this.agencia = this.rota.snapshot.params["agencia"];
    this.conta = this.rota.snapshot.params["conta"];
    this.id = this.rota.snapshot.params["idcontato"];
    this.banco = this.rota.snapshot.params["banco"];
  }


  cadastrar() {
    console.log("Função cadastrar");
    console.log(this.email);
    console.log(this.nomeprof);
    console.log(this.telprof);
    console.log(this.agencia);
    console.log(this.conta);
    console.log(this.banco);


    let dados = {}
    dados['nome_prof'] = this.nomeprof;
    dados['tel_prof'] = this.telprof;
    dados['Ag_banco'] = this.agencia;
    dados['conta_banco'] = this.conta;
    dados['banco'] = this.banco;
    console.log(dados);


    if(this.id == null){
      this.service.incluirBD(dados);
    } else{ 
    this.service.alterar(this.id,dados);
  }
    
    this.nav.navigateForward("meusdados");
  }
  

  irParaInicio(){
    this.nav.navigateForward('inicio');
  }

}
