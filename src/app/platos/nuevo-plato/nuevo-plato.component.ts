import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plato } from '../plato';
import { PlatoService } from '../plato.service';

@Component({
  selector: 'app-nuevo-plato',
  templateUrl: './nuevo-plato.component.html',
  styleUrls: ['./nuevo-plato.component.css']
})
export class NuevoPlatoComponent implements OnInit {

  plato:Plato=new Plato();
  titulo:string="Registro de Platos";

  constructor(private platoServicio:PlatoService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
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

  create():void{
    console.log(this.plato);
    this.platoServicio.create(this.plato).subscribe(
      res=>this.router.navigate(['/principal/plato'])  
    )

  }

}
