import { Component, OnInit } from '@angular/core';
import { DocumentoVenta } from './documento-venta';
import { DocumentoVentaService } from './documento-venta.service';

@Component({
  selector: 'app-documento-venta',
  templateUrl: './documento-venta.component.html',
  styleUrls: ['./documento-venta.component.css']
})
export class DocumentoVentaComponent implements OnInit {

  documentoVenta: DocumentoVenta[] | undefined;

  constructor(private documentoVentaService:DocumentoVentaService) { }

  ngOnInit(): void {
    this.documentoVentaService.getAll().subscribe(
      p => this.documentoVenta=p
    );
  }

  delete(documentoVenta:DocumentoVenta):void{
    console.log("Hello from delete");
    this.documentoVentaService.delete(documentoVenta.id_docventa).subscribe(
      res=>this.documentoVentaService.getAll().subscribe(
        response=>this.documentoVenta=response
      )
    );
  }

}
