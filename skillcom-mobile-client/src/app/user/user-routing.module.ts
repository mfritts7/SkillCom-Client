import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './create/create.component';
import { UserIndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'user', component: UserIndexComponent },
  { path: 'user/create', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
