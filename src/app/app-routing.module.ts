import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path:"",component:UsersComponent},
  {path:"singleuser/:id",component:SingleUserComponent},
  {path:"edituser/:id",component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
