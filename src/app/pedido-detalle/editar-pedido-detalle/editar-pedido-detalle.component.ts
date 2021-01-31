import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoDetalle } from '../pedido-detalle';
import { PedidoDetalleService } from '../pedido-detalle.service';

@Component({
  selector: 'app-editar-pedido-detalle',
  templateUrl: './editar-pedido-detalle.component.html',
  styleUrls: ['./editar-pedido-detalle.component.css']
})
export class EditarPedidoDetalleComponent implements OnInit {

  pedidoDetalle:PedidoDetalle=new PedidoDetalle();
  titulo:string="Editar Pedido Detalle";

  constructor(private pedidoDetalleServicio:PedidoDetalleService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
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

  update():void{
    this.pedidoDetalleServicio.update(this.pedidoDetalle).subscribe(
      res=>this.router.navigate(['/principal/pedidoDetalle'])  
    );
  }

}
