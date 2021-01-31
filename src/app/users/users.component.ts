import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] | undefined;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(
      p => this.users=p
    );
  }

  delete(users:Users):void{
    console.log("Hello from delete");
    this.usersService.delete(users.id).subscribe(
      res=>this.usersService.getAll().subscribe(
        response=>this.users=response
      )
    );
  }

}
