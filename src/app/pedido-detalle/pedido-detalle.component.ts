import { Component, OnInit } from '@angular/core';
import { PedidoDetalle } from './pedido-detalle';
import { PedidoDetalleService } from './pedido-detalle.service';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css']
})
export class PedidoDetalleComponent implements OnInit {

  pedidoDetalle: PedidoDetalle[] | undefined;

  constructor(private pedidoDetalleService:PedidoDetalleService) { }

  ngOnInit(): void {
    this.pedidoDetalleService.getAll().subscribe(
      p => this.pedidoDetalle=p
    );
  }

  delete(pedidoDetalle:PedidoDetalle):void{
    console.log("Hello from delete");
    this.pedidoDetalleService.delete(pedidoDetalle.id_ped_detalle).subscribe(
      res=>this.pedidoDetalleService.getAll().subscribe(
        response=>this.pedidoDetalle=response
      )
    );
  }

}
