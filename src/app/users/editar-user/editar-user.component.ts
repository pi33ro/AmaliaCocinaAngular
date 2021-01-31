import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {

  users:Users=new Users();
  titulo:string="Editar Usuario";

  constructor(private usersServicio:UsersService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
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

  update():void{
    this.usersServicio.update(this.users).subscribe(
      res=>this.router.navigate(['/users'])  
    );
  }

}
