import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-editar-orden',
  templateUrl: './editar-orden.component.html',
  styleUrls: ['./editar-orden.component.css']
})
export class EditarOrdenComponent implements OnInit {

  orden:Orden=new Orden();
  titulo:string="Editar Orden";

  constructor(private ordenServicio:OrdenService, 
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
          this.ordenServicio.get(id).subscribe(
            es=>this.orden=es
          );
        }
      }

    );
  }

  update():void{
    this.ordenServicio.update(this.orden).subscribe(
      res=>this.router.navigate(['/principal/orden'])  
    );
  }

}
