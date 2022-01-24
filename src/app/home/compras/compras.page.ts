import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  productos:any;
  numero:number=0;
  directorio: any;
  constructor(private storage: Storage) { 
    this.productos=[];
    for (let index = 0; index < 15; index++) {
      this.productos.push(this.numero);
    }
  }

  async ngOnInit(){
    this.storage=new Storage();
    await this.storage.create();
    //this.storage.clear();
    this.directorio=await this.storage.get('directorio');
  }

  agregaralcarro(num: number){
    // this.directorio[num]=this.directorio[num]+this.productos[num];
    // this.storage.set('directorio',this.directorio);
  }

  menos(num:number){
    // this.productos[num]++;
  }
  mas(num: number){
    // this.productos[num]++;
  }
}
