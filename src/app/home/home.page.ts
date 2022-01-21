import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  directorio: any;
  producto: number;
  usuario: boolean;
  nusuario: number;
  constructor(private storage: Storage) {
    this.producto=0;
    this.usuario=false;
  }
  async ngOnInit(){
    this.storage=new Storage();
    await this.storage.create();
    //this.storage.clear();
    this.directorio=await this.storage.get('directorio');
    if(this.directorio==null){
      for (let index = 0; index < 15; index++) {
        this.directorio.push(this.producto);
      }
      this.directorio.push(this.usuario);
      this.directorio.push(this.nusuario);
      this.storage.set('directorio',this.directorio);
    }
  }
}
