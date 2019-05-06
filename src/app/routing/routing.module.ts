import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { UserComponent } from '../user/user.component';
import { ReposComponent }  from '../repos/repos.component'
import { NotFoundComponent } from '../not-found/not-found.component'

const routes:Routes=[
  {path:'user', component:UserComponent},
  // {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'repos', component:ReposComponent},
  {path:'**', component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
