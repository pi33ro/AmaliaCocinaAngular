import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoDetalle } from '../pedido-detalle';
import { PedidoDetalleService } from '../pedido-detalle.service';

@Component({
  selector: 'app-nuevo-pedido-detalle',
  templateUrl: './nuevo-pedido-detalle.component.html',
  styleUrls: ['./nuevo-pedido-detalle.component.css']
})
export class NuevoPedidoDetalleComponent implements OnInit {

  pedidoDetalle:PedidoDetalle=new PedidoDetalle();
  titulo:string="Registrar Detalle de pedidos";

  constructor(private pedidoDetalleServicio:PedidoDetalleService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.pedidoDetalleServicio.get(id).subscribe(
            es=>this.pedidoDetalle=es
          );
        }
      }

    );
  }

  create():void{
    console.log(this.pedidoDetalle);
    this.pedidoDetalleServicio.create(this.pedidoDetalle).subscribe(
      res=>this.router.navigate(['/principal/pedidoDetalle'])  
    )

  }

}
