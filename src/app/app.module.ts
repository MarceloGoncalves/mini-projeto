import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { ListUserComponent } from './core/list-user/list-user.component';
import { RegisterUserComponent } from './core/register-user/register-user.component';
import { NaveBarComponent } from './shared/nave-bar/nave-bar.component';
import { EditeUserComponent } from './core/edite-user/edite-user.component';

const router:Routes =[
  {path:' ', component: RegisterUserComponent},
  {path:'list/user',component:ListUserComponent},
  {path:'register/user', component:RegisterUserComponent},
  {path:'edite/user/:id', component:EditeUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NaveBarComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
