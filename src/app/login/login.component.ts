import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = "MANTENIMIENTO USUARIO";
  user: string = "";
  password: string = "";
  op: number = 0;
  users: Users[] = [];
  

  constructor(private http: UsersService, 
              private router: Router, 
              private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getAll().subscribe(data => {​​
      this.users = data;

    }​​)
  }

  login() {
    console.log(this.user);
    console.log(this.password);

    for (let valor of this.users) {​​
      if (valor.username === this.user && valor.password === this.password) {​​
        this.op = 1;
      }​​
    }​​

    if (this.op == 1) {​​
      console.log("correcto");
      this.http.getAll().subscribe(
        res => this.router.navigate(['/principal'])
      );
    }​​

    else{​​
      console.log("incorrecto");
      this.http.getAll().subscribe(
        res => this.router.navigate(['/principal/login'])
      );
    }​​
    
  }

}
