import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { ContractService } from '../contract/contract.service';
import { Contract } from '../contract/contract';
import { ContractDTO } from '../contract/contractDTO';
import { DeviceService } from '../device/device.service';
import { Device } from '../device/device';
import { PlanService } from '../plan/plan.service';
import { Plan } from '../plan/plan';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  chosenPlan!: Plan;
  chosenDevice!: Device;
  newContract: ContractDTO = {"userId":69,"planId":69,"deviceId":69,"phoneNumber":'default'};

  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private planService: PlanService,
    private deviceService: DeviceService
  ) { }
  
  ngOnInit(): void {
    this.chosenPlan = this.planService.newPlan;
    this.chosenDevice = this.deviceService.newDevice;
    this.userService.getUser().subscribe(u => this.newContract.userId = u.id)
    this.newContract.planId = this.planService.newPlan.id;
    this.newContract.deviceId = this.deviceService.newDevice.id;
  }

  addContract(newContract: ContractDTO): void {
    newContract.phoneNumber = this.randomPhone()
    this.contractService.addContract(newContract).subscribe();
  }
  
  //Checks if number is unique
  addPhoneNumber(contracts: Contract[]){
    var placeNumber = this.randomPhone()
    var phoneNumberTest = true
    while (phoneNumberTest)
    for (var i = 0;i<contracts.length;i++){
    if (contracts[i].phoneNumber == 'd'){
      placeNumber = this.randomPhone()
    }
    else{
      phoneNumberTest = false
    }
  }
  this.newContract.phoneNumber = placeNumber
    console.log(this.newContract.phoneNumber)
  }

  randomPhone() : string{
    var a,b,c = 0
    a = Math.round(Math.random()*999)
    b = Math.round(Math.random()*999)
    c = Math.round(Math.random()*9999)
    if( a < 100){
      a = a*10
    }
    if (a<10){
      a= a*100
    }
    if (b < 100){
      b = b*10
    }
    if(b<10){
      b = b*100
    }
    if (c < 1000 && c > 100){
      c = c*10
    }
    if(c < 100){
      c = c*100
    }
    return a+"-"+b+"-"+c
  }
}
