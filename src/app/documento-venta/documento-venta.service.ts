import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentoVenta } from './documento-venta';

@Injectable({
  providedIn: 'root'
})
export class DocumentoVentaService {

  private url:string="http://localhost:8080/rest_documentoventa";

  constructor(private http:HttpClient) { }

  //obtener lista DocumentoVenta
  getAll():Observable<DocumentoVenta[]>{
    return this.http.get<DocumentoVenta[]>(this.url);
  }

  //crear DocumentoVenta
  create(documentoVenta:DocumentoVenta):Observable<DocumentoVenta>{
    return this.http.post<DocumentoVenta>(this.url,documentoVenta);

  }

  //obtener un DocumentoVenta
  get(id:number):Observable<DocumentoVenta>{
    return this.http.get<DocumentoVenta>(this.url+'/'+id);
  }

  //actualizar DocumentoVenta
  update(documentoVenta:DocumentoVenta):Observable<DocumentoVenta>{
    return this.http.put<DocumentoVenta>(this.url,documentoVenta);

  }

  //eliminar DocumentoVenta
  delete(id:number):Observable<DocumentoVenta>{
    return this.http.delete<DocumentoVenta>(this.url+'/'+id);
  }
}
