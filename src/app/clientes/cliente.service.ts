import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string="http://localhost:8080/rest_cli";

  constructor(private http:HttpClient) { }

  //obtener lista Cliente
  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //crear Cliente
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,cliente);

  }

  //obtener un Cliente
  get(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/'+id);
  }

  //actualizar Cliente
  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url,cliente);

  }

  //eliminar Cliente
  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/'+id);
  }
}
