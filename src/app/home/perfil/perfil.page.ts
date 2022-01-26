import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  directorio: any;
  password: string;
  pusuario: string;
  constructor(private storage: Storage) { 
    this.directorio=[];
  }

  async ngOnInit(){
    this.storage=new Storage();
    await this.storage.create();
    //this.storage.clear();
    this.directorio=await this.storage.get('directorio');
  }

  async contrasena(){
    if(this.pusuario=="Username"){
      if(this.password=="password"){
        this.directorio[15]=true;
        this.directorio[16]=1;
        await this.storage.set('directorio',this.directorio);
        window.location.reload();
      }
    }
  }

  async invitado(){
    this.directorio[15]=true;
    this.directorio[16]=0;
    await this.storage.set('directorio',this.directorio);
    window.location.reload();
  }

  async Cerrar(){
    this.directorio[15]=false;
    this.directorio[16]=0;
    await this.storage.set('directorio',this.directorio);
    window.location.reload();
  }

}
