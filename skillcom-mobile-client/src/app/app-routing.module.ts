import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout/checkout.component';
import { FrontComponent } from './front/front.component';
import { UserIndexComponent } from './user/index/index.component';

const routes: Routes = [
 // { path: '', component: FrontComponent },
  { path: 'checkout', component: CheckoutComponent },
  {path: 'user',component: UserIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
