import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceIndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'device', component: DeviceIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
