import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from '../trabajador';
import { TrabajadorService } from '../trabajador.service';

@Component({
  selector: 'app-nuevo-trabajador',
  templateUrl: './nuevo-trabajador.component.html',
  styleUrls: ['./nuevo-trabajador.component.css']
})
export class NuevoTrabajadorComponent implements OnInit {

  trabajador:Trabajador=new Trabajador();
  titulo:string="Registro de Trabajador";

  constructor(private trabajadorServicio:TrabajadorService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.trabajadorServicio.get(id).subscribe(
            es=>this.trabajador=es
          );
        }
      }

    );
  }

  create():void{
    console.log(this.trabajador);
    this.trabajadorServicio.create(this.trabajador).subscribe(
      res=>this.router.navigate(['/trabajador'])  
    )

  }

}
