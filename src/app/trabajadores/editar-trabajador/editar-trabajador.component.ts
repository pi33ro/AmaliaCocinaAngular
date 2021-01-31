import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from '../trabajador';
import { TrabajadorService } from '../trabajador.service';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {

  trabajador:Trabajador=new Trabajador();
  titulo:string="Editar Trabajador";

  constructor(private trabajadorServicio:TrabajadorService, 
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
          this.trabajadorServicio.get(id).subscribe(
            es=>this.trabajador=es
          );
        }
      }

    );
  }

  update():void{
    this.trabajadorServicio.update(this.trabajador).subscribe(
      res=>this.router.navigate(['/trabajador'])  
    );
  }

}
