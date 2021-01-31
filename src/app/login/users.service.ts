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

  //LISTAR USUARIO

  getAll():Observable<Users[]>{​​
    return this.http.get<Users[]>(this.url);

  }
}
