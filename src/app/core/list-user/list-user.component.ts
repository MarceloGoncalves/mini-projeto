import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { Route } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[];
  constructor(private userService: UserService, private router: Route) { 
    this.users = [];
  }

  ngOnInit() {
    this.list();
  }


  list(){
    this.userService.list().subscribe(
      (res:User[])=>{
        this.users =res;
      });
  }
  delete(id:number){
    this.userService.delete(id).subscribe()
  }

  edit(){
    
  }


}
