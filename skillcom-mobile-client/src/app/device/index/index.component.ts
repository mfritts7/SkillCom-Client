import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/plan/plan';
import { DeviceService } from '../device.service';
import { Device } from '../device';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DeviceIndexComponent implements OnInit {
  availableDevices!: Device[];
  chosenPlan!: Plan;
  sourceImages: {[key: string]: string} = {
    ["iPhone 13"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499353373900871/unknown.png",
    ["Galaxy S22"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499448723013642/unknown.png",
    ["Pixel 6a"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499293114355822/unknown.png",
    ["OnePlus 10 Pro"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499512665190501/unknown.png",
    ["Motorola Edge"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499481665097819/unknown.png",
    ["Nokia G400"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499420600209429/unknown.png",
    ["Jitterbug"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499878056169592/unknown.png",
    ["Banana Phone"] : "https://cdn.discordapp.com/attachments/761366360638488606/1016499752961060874/unknown.png"
  }

  constructor(
    private deviceService: DeviceService,
    private userService: UserService,
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.retrieveDevices();
    this.chosenPlan = this.planService.newPlan;
  }

  retrieveDevices() : void{
    this.deviceService.getDevices().subscribe(d => this.availableDevices = d)
  }

  addDevice(device: Device) {
    this.deviceService.newDevice = JSON.parse(JSON.stringify(device))
  }
}
