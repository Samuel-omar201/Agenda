import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
  personas = [];
  IdUsuario = null;

  constructor(
    public rest: UsuarioService,
    private route: ActivatedRoute,
    private load:LoadingController
    ) { }

    
  ngOnInit() {
    this.IdUsuario = this.route.snapshot.params['id'];
    if(this.IdUsuario){
      this.getPersons();
    }
    
  }

 async getPersons(){
    const loading = await this.load.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.rest.searchContacts(this.IdUsuario).subscribe(res=>{
      loading.dismiss();
      console.log(res)
      this.personas = res.contactos.contactos;
      
    });
  }
}
