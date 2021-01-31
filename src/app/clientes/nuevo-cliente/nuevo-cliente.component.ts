import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  cliente:Cliente=new Cliente();
  titulo:string="Registro de Cliente";

  constructor(private clienteServicio:ClienteService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
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

  create():void{
    console.log(this.cliente);
    this.clienteServicio.create(this.cliente).subscribe(
      res=>this.router.navigate(['/principal/cliente'])  
    )

  }

}
