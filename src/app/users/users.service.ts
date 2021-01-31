import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string="http://localhost:8080/rest_use";

  constructor(private http:HttpClient) { }

  //obtener lista Users
  getAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.url);
  }

  //crear Users
  create(users:Users):Observable<Users>{
    return this.http.post<Users>(this.url,users);

  }

  //obtener un Users
  get(id:number):Observable<Users>{
    return this.http.get<Users>(this.url+'/'+id);
  }

  //actualizar Users
  update(users:Users):Observable<Users>{
    return this.http.put<Users>(this.url,users);

  }

  //eliminar Users
  delete(id:number):Observable<Users>{
    return this.http.delete<Users>(this.url+'/'+id);
  }

}
