import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plato } from './plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private url:string="http://localhost:8080/rest_plato";

  constructor(private http:HttpClient) { }

  //obtener lista Plato
  getAll():Observable<Plato[]>{
    return this.http.get<Plato[]>(this.url);
  }

  //crear Plato
  create(plato:Plato):Observable<Plato>{
    return this.http.post<Plato>(this.url,plato);

  }

  //obtener un Plato
  get(id:number):Observable<Plato>{
    return this.http.get<Plato>(this.url+'/'+id);
  }

  //actualizar Plato
  update(plato:Plato):Observable<Plato>{
    return this.http.put<Plato>(this.url,plato);

  }

  //eliminar Plato
  delete(id:number):Observable<Plato>{
    return this.http.delete<Plato>(this.url+'/'+id);
  }
}
