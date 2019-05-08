import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
 user:User;

  constructor(private userService:UserService){
    this.user = new User();
    
  }

  onSubmit(){
    this.userService.register(this.user).subscribe(
      (res:User)=>{
        console.log(`user id ${res.id} added`);
      }
    );
  }

}
