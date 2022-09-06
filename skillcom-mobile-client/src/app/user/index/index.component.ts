import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';
import { Contract } from 'src/app/contract/contract';
import { ContractService } from 'src/app/contract/contract.service';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/plan/plan';
import { DeviceService } from 'src/app/device/device.service';
import { Device } from 'src/app/device/device';
import { MsalService } from '@azure/msal-angular';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
}

@Component({
  selector: 'app-user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class UserIndexComponent implements OnInit {
  activeUser!: User;
  userContracts!: Contract[];
  availablePlans!: Plan[];
  availableDevices!: Device[];
  basicCount!: number;
  advancedCount!: number;
  premiumCount!:number;
  bill!: number;
  profile! : ProfileType;

  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private planService: PlanService,
    private deviceService: DeviceService,
    private msalService: MsalService,
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.getProfile()
    this.retrieveUser().subscribe(u => {
      this.activeUser = u;
      this.retrievePlans().subscribe(p => {
        this.availablePlans = p;
        this.retrieveDevices().subscribe(d => {
          this.availableDevices = d;
          this.retrieveContracts(u.id).subscribe( c => {
            this.userContracts = c;
            this.bill = this.monthlyBill(c);
            this.basicCount = this.addPlanCounts(1);
            this.advancedCount = this.addPlanCounts(2);
            this.premiumCount = this.addPlanCounts(3);
          });
        });
      });
    });
  }

  retrieveUser(): Observable<User> {
    return this.userService.getUser();
  }
    
  retrieveContracts(id: number): Observable<Contract[]> {
    return this.contractService.getContracts(id);
  }

  retrievePlans(): Observable<Plan[]> {
    return this.planService.getPlans();
  }
  
  retrieveDevices(): Observable<Device[]> {
    return this.deviceService.getDevices();
  }

  addPlanCounts(planId : number) : number{
    return this.userService.numberOfPlans(this.userContracts, planId)
  }

  deleteContract(contractId: number) {
    this.contractService.deleteContract(contractId).subscribe(() => {
      this.userContracts = this.userContracts.filter(c => c.id !== contractId);
    })
  }

  userHasPlanType(pId: number): boolean {
    return this.planService.hasPlanType(pId, this.userContracts);
  }

  setPlan(pId: number) {
    this.planService.newPlan = JSON.parse(JSON.stringify(this.availablePlans[pId-1]));
  }

  monthlyBill(uc: Contract[]): number{
    var count = 0
    for(var i=0; i < uc.length-1; i++){
       count = count + this.availableDevices[uc[i].deviceId-1].price/12
    }
    for(var i=0; i < uc.length-1; i++){
      if (uc[i].planId == 1){
        count = count + this.availablePlans[0].monthlyPrice
      }
      if (uc[i].planId == 2){
        count = count + this.availablePlans[1].monthlyPrice
      }
      if (uc[i].planId == 3){
        count = count + this.availablePlans[2].monthlyPrice
      }
   }
    return count
  }

  getName(): string {
    return this.msalService.instance.getActiveAccount()?.name!;
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }

  logout() {
    this.msalService.logout();
  }
}
