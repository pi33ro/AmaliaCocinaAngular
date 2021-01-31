import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente[] | undefined;

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      p => this.cliente=p
    );
  }

  delete(cliente:Cliente):void{
    console.log("Hello from delete");
    this.clienteService.delete(cliente.id_cliente).subscribe(
      res=>this.clienteService.getAll().subscribe(
        response=>this.cliente=response
      )
    );
  }

}
