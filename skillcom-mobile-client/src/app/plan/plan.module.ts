import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanIndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    PlanIndexComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
