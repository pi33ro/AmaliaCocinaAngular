import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedido: Pedido[] | undefined;

  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getAll().subscribe(
      p => this.pedido=p
    );
  }

  delete(pedido:Pedido):void{
    console.log("Hello from delete");
    this.pedidoService.delete(pedido.id_pedido).subscribe(
      res=>this.pedidoService.getAll().subscribe(
        response=>this.pedido=response
      )
    );
  }

}
