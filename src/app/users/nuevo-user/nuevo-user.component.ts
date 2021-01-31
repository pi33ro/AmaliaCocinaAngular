import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.css']
})
export class NuevoUserComponent implements OnInit {

  users:Users=new Users();
  titulo:string="Registro de Usuario";

  constructor(private usersServicio:UsersService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.usersServicio.get(id).subscribe(
            es=>this.users=es
          );
        }
      }

    );
  }

  create():void{
    console.log(this.users);
    this.usersServicio.create(this.users).subscribe(
      res=>this.router.navigate(['/users'])  
    )

  }

}
