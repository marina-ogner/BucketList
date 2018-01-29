import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component'


const routes: Routes = [{path:'' , pathMatch: "full", // don't forget
                        component:LoginComponent},
                        {path:'home' ,
                        component:HomeComponent},
                        {path:'user/:id' ,
                        component:AboutComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
