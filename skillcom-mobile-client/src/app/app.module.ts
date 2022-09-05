import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ContractModule } from './contract/contract.module';
import { PlanModule } from './plan/plan.module';
import { DeviceModule } from './device/device.module';
import { FrontComponent } from './front/front.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UserModule,
    ContractModule,
    PlanModule,
    DeviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
