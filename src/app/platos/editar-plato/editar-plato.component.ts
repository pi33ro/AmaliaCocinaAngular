import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plato } from '../plato';
import { PlatoService } from '../plato.service';

@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit {

  plato:Plato=new Plato();
  titulo:string="Editar Plato";

  constructor(private platoServicio:PlatoService, 
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
          this.platoServicio.get(id).subscribe(
            es=>this.plato=es
          );
        }
      }

    );
  }

  update():void{
    this.platoServicio.update(this.plato).subscribe(
      res=>this.router.navigate(['/principal/plato'])  
    );
  }

}
