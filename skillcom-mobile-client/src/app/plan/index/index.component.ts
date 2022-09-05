import { Component, OnInit } from '@angular/core'

import { UserService } from 'src/app/user/user.service'
import { ContractService } from 'src/app/contract/contract.service';
import { Contract } from 'src/app/contract/contract';
import { PlanService } from '../plan.service'
import { Plan } from '../plan'
import { DeviceService } from 'src/app/device/device.service';

@Component({
  selector: 'app-plan-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PlanIndexComponent implements OnInit {
  availablePlans!: Plan[];
  userContracts!: Contract[];

  constructor(
    private planService: PlanService,
    private userService: UserService,
    private contractService: ContractService,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    this.retrievePlans();
    this.retrieveUserContracts();
  }

  retrievePlans() {
    this.planService.getPlans().subscribe(p => this.availablePlans = p);
  }

  retrieveUserContracts() {
    this.contractService.getContractsTest().subscribe(c => this.userContracts = c);
  }

  addPlan(plan: Plan) {
    this.planService.newPlan = JSON.parse(JSON.stringify(plan));
  }

  hasPlanType(pId: number): boolean {
    return this.planService.hasPlanType(pId, this.userContracts);
  }
}
