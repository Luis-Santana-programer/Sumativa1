import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
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
  password: string;
  pusuario: string;
  productos: any;
  constructor(private storage: Storage) {
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
      this.storage.set('directorio',this.directorio);
    }

  }

  contrasena(){
    if(this.pusuario=="Username"){
      if(this.password=="password"){
        this.directorio[15]=true;
        this.directorio[16]=1;
        this.storage.set('directorio',this.directorio);
      }
    }
  }
  invitado(){
    this.directorio[15]=true;
    this.directorio[16]=0;
    this.storage.set('directorio',this.directorio);
  }
}
