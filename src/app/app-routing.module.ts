import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginComponent } from './Admin/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './User/home/home.component';
import { MainComponent } from './User/main/main.component';
import { RegisterComponent } from './User/register/register.component';

const routes: Routes = [{
 
    path:'register',
    component:RegisterComponent,
 
  },
  {
    path:'login',
    component:LoginComponent,
   
  },
  // {
  //   path:'',
  //   component:HeaderComponent,
   
  // },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'', component:MainComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
