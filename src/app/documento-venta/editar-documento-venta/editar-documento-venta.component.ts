import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoVenta } from '../documento-venta';
import { DocumentoVentaService } from '../documento-venta.service';

@Component({
  selector: 'app-editar-documento-venta',
  templateUrl: './editar-documento-venta.component.html',
  styleUrls: ['./editar-documento-venta.component.css']
})
export class EditarDocumentoVentaComponent implements OnInit {

  documentoVenta:DocumentoVenta=new DocumentoVenta();
  titulo:string="Editar Documento de Venta";

  constructor(private documentoVentaServicio:DocumentoVentaService, 
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
          this.documentoVentaServicio.get(id).subscribe(
            es=>this.documentoVenta=es
          );
        }
      }

    );
  }

  update():void{
    this.documentoVentaServicio.update(this.documentoVenta).subscribe(
      res=>this.router.navigate(['/principal/documentoVenta'])  
    );
  }

}
