import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from '../list-users/list-users.component';

const routes: Routes = [
  { path: 'list-users', component: ListUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
