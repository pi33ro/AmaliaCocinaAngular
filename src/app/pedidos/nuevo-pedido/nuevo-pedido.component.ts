import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  pedido:Pedido=new Pedido();
  titulo:string="Registro de Pedidos";

  constructor(private pedidoServicio:PedidoService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.pedidoServicio.get(id).subscribe(
            es=>this.pedido=es
          );
        }
      }

    );
  }

  create():void{
    console.log(this.pedido);
    this.pedidoServicio.create(this.pedido).subscribe(
      res=>this.router.navigate(['/principal/pedido'])  
    )

  }

}
