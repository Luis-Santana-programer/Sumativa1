import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  productos:any;
  informaccion: any;
  listaproductos: any;
  numero:number=0;
  directorio: any;
  constructor(private storage: Storage, private alerta: AlertController) { 
    this.productos=[];
    for (let index = 0; index < 15; index++) {
      this.productos.push(this.numero);
    }
    this.listaproductos=[];

    this.informaccion ={
      nombre: "agua",
      precio: 20,
      url: "assets/images/agua1.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "galletas",
      precio: 30,
      url: "assets/images/galletas.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "pasta de dientes",
      precio: 25,
      url: "assets/images/crust.png"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "escobas",
      precio: 35,
      url: "assets/images/8300.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mejor amigo",
      precio: 250,
      url: "assets/images/friend.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mascara de koala",
      precio: 150,
      url: "assets/images/koala.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mayonesa",
      precio: 30,
      url: "assets/images/mayonaise.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "chango",
      precio: 4000,
      url: "assets/images/monky.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mostasa",
      precio: 30,
      url: "assets/images/mustard.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "oreos",
      precio: 20,
      url: "assets/images/oreos.png"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "peluche pokemon",
      precio: 120,
      url: "assets/images/pikachu.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "poptarts",
      precio: 25,
      url: "assets/images/poptarts.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "eskeleto anatomicamente correcto",
      precio: 400,
      url: "assets/images/skeleton.jpg"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "snickers",
      precio: 10,
      url: "assets/images/sniickers.png"
    };
    this.listaproductos.push(this.informaccion);
    this.informaccion ={
      nombre: "mascara toy-story",
      precio: 20,
      url: "assets/images/woody.png"
    };
    this.listaproductos.push(this.informaccion);

  }

  async ngOnInit(){
    this.storage=new Storage();
    await this.storage.create();
    this.directorio=await this.storage.get('directorio');
  }

   async agregaralcarro(num: number){
    if(this.directorio[16]==0){
      this.mensaje("No se pueden añadir productos como invitado");
    }else{
     this.directorio[num]=this.directorio[num]+this.productos[num];
     this.directorio[17]=this.directorio[17]+this.productos[num];
     this.storage.set('directorio',this.directorio);
     window.location.reload();
    }
  }

  menos(num:number){
    if(this.productos[num]!=0){ 
    this.productos[num]--;
    }
  }
  mas(num: number){
     this.productos[num]++;
  }
  async mensaje(x: string){
    const alert = await this.alerta.create({
      header: 'Alerta',
      message: x,
      buttons: ['OK']
    });
    await alert.present();
  }
}
