import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditeUserComponent } from './edite-user/edite-user.component';

@NgModule({
  declarations: [RegisterUserComponent, ListUserComponent, EditeUserComponent],
  imports: [
    CommonModule, 
    FormsModule 
  ],
  exports:[
    RegisterUserComponent, 
    ListUserComponent
  ]
})
export class CoreModule { }
