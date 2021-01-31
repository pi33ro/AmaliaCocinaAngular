import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoVenta } from '../documento-venta';
import { DocumentoVentaService } from '../documento-venta.service';

@Component({
  selector: 'app-nuevo-documento-venta',
  templateUrl: './nuevo-documento-venta.component.html',
  styleUrls: ['./nuevo-documento-venta.component.css']
})
export class NuevoDocumentoVentaComponent implements OnInit {

  documentoVenta:DocumentoVenta=new DocumentoVenta();
  titulo:string="Registrar documento de venta";

  constructor(private documentoVentaServicio:DocumentoVentaService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.documentoVentaServicio.get(id).subscribe(
            es=>this.documentoVenta=es
          );
        }
      }

    );
  }

  create():void{
    console.log(this.documentoVenta);
    this.documentoVentaServicio.create(this.documentoVenta).subscribe(
      res=>this.router.navigate(['/principal/documentoVenta'])  
    )

  }

}
