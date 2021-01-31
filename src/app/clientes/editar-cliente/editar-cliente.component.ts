import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente:Cliente=new Cliente();
  titulo:string="Editar Cliente";

  constructor(private clienteServicio:ClienteService, 
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
          this.clienteServicio.get(id).subscribe(
            es=>this.cliente=es
          );
        }
      }

    );
  }

  update():void{
    this.clienteServicio.update(this.cliente).subscribe(
      res=>this.router.navigate(['/cliente'])  
    );
  }

}
