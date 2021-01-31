import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url:string="http://localhost:8080/rest_ped";

  constructor(private http:HttpClient) { }

  //obtener lista Pedido
  getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }

  //crear Pedido
  create(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url,pedido);

  }

  //obtener un Pedido
  get(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(this.url+'/'+id);
  }

  //actualizar Pedido
  update(pedido:Pedido):Observable<Pedido>{
    return this.http.put<Pedido>(this.url,pedido);

  }

  //eliminar Pedido
  delete(id:number):Observable<Pedido>{
    return this.http.delete<Pedido>(this.url+'/'+id);
  }
}
