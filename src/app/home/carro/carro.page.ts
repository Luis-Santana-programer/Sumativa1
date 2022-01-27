import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  listaproductos: any;
  informaccion: any;
  directorio: any;
  mostrar: boolean=false;
  total:number=0;
  constructor(private storage: Storage, private alerta: AlertController) { 
    this.listaproductos=[];

    this.informaccion ={
      nombre: "agua",
      precio: 20
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "galletas",
      precio: 30
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "pasta de dientes",
      precio: 25
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "escobas",
      precio: 35
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mejor amigo",
      precio: 250
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mascara de koala",
      precio: 150
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mayonesa",
      precio: 30
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "chango",
      precio: 4000
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mostasa",
      precio: 30
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "oreos",
      precio: 20
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "peluche pokemon",
      precio: 120
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "poptarts",
      precio: 25
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "eskeleto anatomicamente correcto",
      precio: 400
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "snickers",
      precio: 10
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mascara toy-story",
      precio: 20
    };
    this.listaproductos.push(this.informaccion);
  }

  async ngOnInit() {
    this.storage=new Storage();
    await this.storage.create();
    this.directorio=await this.storage.get('directorio');
    if(this.directorio[16]==0){
     // this.mensaje("Favor de iniciar sesión para poder visualizar contenido");
    }else{
      this.mostrar=true;
      for (let x = 0; x < this.listaproductos.length; x++) {
        this.total = this.total + (this.directorio[x]*this.listaproductos[x].precio);
      }
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
  async pagar(){
    for (let x = 0; x < this.listaproductos.length; x++) {
      this.directorio[x] =0;
    }
    this.total=0;
    await this.storage.set('directorio',this.directorio);
    window.location.reload();
  }
  async cusuario(){
    if(this.directorio[16]==0){
      this.mensaje("Favor de iniciar sesión para poder visualizar contenido");
    }
  }
}
