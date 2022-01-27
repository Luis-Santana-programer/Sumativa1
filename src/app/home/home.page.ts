import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  directorio: any;
  producto: number=0;
  usuario: boolean=false;
  nusuario: number;
  total: number=0;
  password: string;
  pusuario: string;
  productos: any;
  constructor(private storage: Storage, private alerta: AlertController) {
    this.productos=[];
    for (let index = 0; index < 15; index++) {
      this.productos.push("1");
    }
    this.directorio=[];
  }
  async ngOnInit(){
    this.storage=new Storage();
    await this.storage.create();
    //this.storage.clear();
    this.directorio=await this.storage.get('directorio');
    if(this.directorio==null){
      this.directorio=[];
       for (let index = 0; index < 15; index++) {
         this.directorio.push(this.producto);
       }
       this.directorio.push(this.usuario);
       this.directorio.push(this.nusuario);
       this.directorio.push(this.total);
      this.storage.set('directorio',this.directorio);
    }

  }
  async mensaje(x: string){
    const alert = await this.alerta.create({
      header: 'Alerta',
      message: x,
      buttons: ['OK']
    });
    await alert.present();
  }

  async cusuario(){
    if(this.directorio[16]==0){
    this.mensaje("Favor de iniciar sesión para poder visualizar contenido");
    }
  }

}
