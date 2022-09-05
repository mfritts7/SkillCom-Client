import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceIndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    DeviceIndexComponent,
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
