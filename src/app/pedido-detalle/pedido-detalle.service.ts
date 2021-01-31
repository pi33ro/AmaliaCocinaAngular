import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoDetalle } from './pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidoDetalleService {

  private url:string="http://localhost:8080/rest_pedidodetalle";

  constructor(private http:HttpClient) { }

  //obtener lista PedidoDetalle
  getAll():Observable<PedidoDetalle[]>{
    return this.http.get<PedidoDetalle[]>(this.url);
  }

  //crear PedidoDetalle
  create(pedidoDetalle:PedidoDetalle):Observable<PedidoDetalle>{
    return this.http.post<PedidoDetalle>(this.url,pedidoDetalle);

  }

  //obtener un PedidoDetalle
  get(id:number):Observable<PedidoDetalle>{
    return this.http.get<PedidoDetalle>(this.url+'/'+id);
  }

  //actualizar PedidoDetalle
  update(pedidoDetalle:PedidoDetalle):Observable<PedidoDetalle>{
    return this.http.put<PedidoDetalle>(this.url,pedidoDetalle);

  }

  //eliminar PedidoDetalle
  delete(id:number):Observable<PedidoDetalle>{
    return this.http.delete<PedidoDetalle>(this.url+'/'+id);
  }
}
