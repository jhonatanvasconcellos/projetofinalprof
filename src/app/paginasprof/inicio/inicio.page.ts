import { Component, OnInit } from '@angular/core';
import { DadoscliService } from '../../dadoscli.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  servicos:any;
  status:string;
  alterarstatus = false;
  chamados:any;
  constructor(private service:DadoscliService,
              private rota: ActivatedRoute,
              private nav: NavController,
              private alerta: AlertController) { }

  ngOnInit() {

    this.status = this.rota.snapshot.params["status_cham"];

    this.service.listarservico().subscribe(data =>{
      this.servicos = data.map(e => {
        return{
          id: e.payload.doc.id,
          tipoChamado: e.payload.doc.data()['area_cham'],
          desChamado: e.payload.doc.data()['desc_cham'],
          tempoChamado: e.payload.doc.data()['tempoutil_cham'],
          urgenciaChamado: e.payload.doc.data()['urgencia_cham'],
          statuschamado: e.payload.doc.data()['status_cham']

        }
      })
    })
  }

  async excluir(chamados){
    //console.log("Raphael", chamados);
    let msg =  await this.alerta.create({header:"Atenção",
      message:"Deseja realmente excluir?",
      buttons:[{
        text:"Sim",
        handler:()=>{
          this.service.excluir(chamados);
        }
        },"Não"]
      });
      await msg.present();}

  alterarStatus(){

    this.alterarstatus = true;
  }


  }




