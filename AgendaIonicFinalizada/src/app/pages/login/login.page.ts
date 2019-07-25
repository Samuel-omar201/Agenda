import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuarios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo;
  password;

  constructor(
    private restU:UsuarioService,
    private nav:NavController,
    private loading:LoadingController,
    private alert: AlertController
    ) { }

  ngOnInit() {
  }

  

  async login(){
    const loading = await this.loading.create({
      message: 'Cargando...',
      duration: 300
    });
    await loading.present();
    

     this.restU.login(this.correo, this.password).subscribe((res)=>{
    
        let usuarioId = res.user._id;
        //Setting Storage
        localStorage.setItem('_id', res.user._id)
        localStorage.setItem('primer_nombre', res.user.primer_nombre)
        localStorage.setItem('correo', res.user.correo )
        //console.log(res.user) 
        this.nav.navigateForward('/menu/personas/'+usuarioId)
        
     
    });

  }

}
