import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.page.html',
  styleUrls: ['./newuser.page.scss'],
})
export class NewuserPage implements OnInit {

  primer_nombre; 
  celular;
  correo;
  password;

  constructor(private usuarioService : UsuarioService, private nav:NavController,) { }

  ngOnInit() {
  }

  saveUser(){
    let dataUser = {
      primer_nombre : this.primer_nombre,
      celular : this.celular,
      correo: this.correo,
      password: this.password
    }

    this.usuarioService.newuser(dataUser)
    .subscribe(data =>{
      console.log( data )
      
      this.nav.navigateForward('/newuser')
      ///menu/personas/5d2ac15772e4ca2938d2f7c4
    })

  }

}
