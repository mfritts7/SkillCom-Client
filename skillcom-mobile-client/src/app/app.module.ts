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
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSALInstanceFactory() : IPublicClientApplication{
  return new PublicClientApplication({
    auth : {
      clientId : '197a4d54-f089-4e0d-bab0-d7fd0d85e3d9',
      redirectUri : 'https://gentle-plant-0ccaad410.1.azurestaticapps.net/'
    
    } 
  })
}


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
    DeviceModule,
    BrowserModule,
    MsalModule
  ],
  providers: [{provide : MSAL_INSTANCE,
  useFactory: MSALInstanceFactory},
  MsalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
