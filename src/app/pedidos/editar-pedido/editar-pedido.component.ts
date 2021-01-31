import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  pedido:Pedido=new Pedido();
  titulo:string="Editar Pedido";

  constructor(private pedidoServicio:PedidoService, 
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
          this.pedidoServicio.get(id).subscribe(
            es=>this.pedido=es
          );
        }
      }

    );
  }

  update():void{
    this.pedidoServicio.update(this.pedido).subscribe(
      res=>this.router.navigate(['/principal/pedido'])  
    );
  }

}
