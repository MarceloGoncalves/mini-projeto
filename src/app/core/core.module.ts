import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule, 
    FormsModule 
  ],
  exports:[
    RegisterUserComponent
  ]
})
export class CoreModule { }
