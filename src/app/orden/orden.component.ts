import { Component, OnInit } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  orden: Orden[] | undefined;

  constructor(private ordenService:OrdenService) { }

  ngOnInit(): void {
    this.ordenService.getAll().subscribe(
      p => this.orden=p
    );
  }

  delete(orden:Orden):void{
    console.log("Hello from delete");
    this.ordenService.delete(orden.id_orden).subscribe(
      res=>this.ordenService.getAll().subscribe(
        response=>this.orden=response
      )
    );
  }

}
