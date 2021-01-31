import { Component, OnInit } from '@angular/core';
import { Trabajador } from './trabajador';
import { TrabajadorService } from './trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  trabajador: Trabajador[] | undefined;

  constructor(private trabajadorService:TrabajadorService) { }

  ngOnInit(): void {
    this.trabajadorService.getAll().subscribe(
      p => this.trabajador=p
    );
  }

  delete(trabajador:Trabajador):void{
    console.log("Hello from delete");
    this.trabajadorService.delete(trabajador.id_trabajador).subscribe(
      res=>this.trabajadorService.getAll().subscribe(
        response=>this.trabajador=response
      )
    );
  }

}
