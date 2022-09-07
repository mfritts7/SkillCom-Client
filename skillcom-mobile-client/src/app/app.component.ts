import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SkillCom Mobile';

  constructor(private authService: MsalService) { }

  ngOnInit():void{
    
  }

  isLoggedIn(): boolean{
    return this.authService.instance.getActiveAccount() != null
  }

  logout(){
    this.authService.logout();
  }
}
