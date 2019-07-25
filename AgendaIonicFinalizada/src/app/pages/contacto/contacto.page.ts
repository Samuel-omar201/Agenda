import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  primer_nombre;
  segundo_nombre;
  primer_apellido;
  segundo_apellido;
  fecha_nacimiento;
  correo;
  direccion;
  celular;
  casa;
  otros;

  constructor(
    private usuarioService : UsuarioService, private nav:NavController,
   ) { }

  ngOnInit() {
  }

  saveUser(){
    let dataContact = {
      _id : localStorage.getItem('_id'), 
      primer_nombre  : this.primer_nombre,
      segundo_nombre : this.segundo_nombre,
      primer_apellido : this.primer_apellido,
      segundo_apellido : this.segundo_apellido,
      fecha_nacimiento : this.fecha_nacimiento,
      correo : this.correo,
      direccion : this.direccion,
      celular : this.celular,
      casa : this.casa,
      otros : this.otros
    }

    this.usuarioService.addMyContact( dataContact )
      .subscribe(data =>{
        console.log( data )
        
        this.nav.navigateForward('/menu/personas/')
        ///menu/personas/5d2ac15772e4ca2938d2f7c4
      })

    console.log(dataContact )

     
  }

}
