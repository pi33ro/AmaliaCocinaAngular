import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-nuevo-orden',
  templateUrl: './nuevo-orden.component.html',
  styleUrls: ['./nuevo-orden.component.css']
})
export class NuevoOrdenComponent implements OnInit {

  orden:Orden=new Orden();
  titulo:string="Registroar orden";

  constructor(private ordenServicio:OrdenService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
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

  create():void{
    console.log(this.orden);
    this.ordenServicio.create(this.orden).subscribe(
      res=>this.router.navigate(['/principal/orden'])  
    )

  }

}
