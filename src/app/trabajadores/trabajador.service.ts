import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajador } from './trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private url:string="http://localhost:8080/rest_tra";

  constructor(private http:HttpClient) { }

  //obtener lista Trabajador
  getAll():Observable<Trabajador[]>{
    return this.http.get<Trabajador[]>(this.url);
  }

  //crear Trabajador
  create(trabajador:Trabajador):Observable<Trabajador>{
    return this.http.post<Trabajador>(this.url,trabajador);

  }

  //obtener un Trabajador
  get(id:number):Observable<Trabajador>{
    return this.http.get<Trabajador>(this.url+'/'+id);
  }

  //actualizar Trabajador
  update(trabajador:Trabajador):Observable<Trabajador>{
    return this.http.put<Trabajador>(this.url,trabajador);

  }

  //eliminar Trabajador
  delete(id:number):Observable<Trabajador>{
    return this.http.delete<Trabajador>(this.url+'/'+id);
  }
}
