import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orden } from './orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private url:string="http://localhost:8080/rest_ord";

  constructor(private http:HttpClient) { }

  //obtener lista Orden
  getAll():Observable<Orden[]>{
    return this.http.get<Orden[]>(this.url);
  }

  //crear Orden
  create(orden:Orden):Observable<Orden>{
    return this.http.post<Orden>(this.url,orden);

  }

  //obtener un Orden
  get(id:number):Observable<Orden>{
    return this.http.get<Orden>(this.url+'/'+id);
  }

  //actualizar Orden
  update(orden:Orden):Observable<Orden>{
    return this.http.put<Orden>(this.url,orden);

  }

  //eliminar Orden
  delete(id:number):Observable<Orden>{
    return this.http.delete<Orden>(this.url+'/'+id);
  }
}
