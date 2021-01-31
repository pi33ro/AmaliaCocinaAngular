import { Component, OnInit } from '@angular/core';
import { Plato } from './plato';
import { PlatoService } from './plato.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  plato: Plato[] | undefined;

  constructor(private platoService:PlatoService) { }

  ngOnInit(): void {
    this.platoService.getAll().subscribe(
      p => this.plato=p
    );
  }

  delete(plato:Plato):void{
    console.log("Hello from delete");
    this.platoService.delete(plato.id_plato).subscribe(
      res=>this.platoService.getAll().subscribe(
        response=>this.plato=response
      )
    );
  }

}
