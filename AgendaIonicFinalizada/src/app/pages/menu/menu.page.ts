import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private nickname = ""
  

  pages = [
    {
      title: 'Principal',
      url: '/menu/principal',
      icon: 'home'
    },
    {
      title: 'Frameworks :)',
      children: [
        {
          title: 'Angular',
          url: '/menu/angular',
          icon: 'logo-angular'
        },
        {
          title: 'Ionic',
          url: '/menu/ionic',
          icon: 'logo-ionic'
        }
      ]
    },
    {
      title: 'Mis contactos',
      children: [
        {
          title: 'Contactos personales',
          url: '/menu/personas',
          icon: 'contact'
        }
      ]
    }
  ]
  constructor(private userService : UsuarioService,  private nav:NavController,) { }

  ngOnInit() {
    this.nickname = localStorage.getItem('primer_nombre')
    this.userService.isLogued()
    this.getMyContacts( localStorage.getItem('_id') )
  }

  logOut() : void{
    this.userService.logOut()
  }

  getMyContacts( idUser: string ){
    this.userService.myContacts( idUser )
      .subscribe( data =>{ 
        console.log(data)
      })
  }

  creatcontact(){
    //console.log('holow')
    this.nav.navigateForward('/contacto')
  }

}
