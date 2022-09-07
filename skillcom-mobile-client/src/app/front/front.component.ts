import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private authService: MsalService) { }

  ngOnInit(): void {
    this.authService.instance.handleRedirectPromise().then(
      res => {
        if (res != null && res.account != null){
          this.authService.instance.setActiveAccount(res.account);
        }
      }
    );
  }

  isLoggedIn(): boolean{
    return this.authService.instance.getActiveAccount() != null
  }

  login(){
    this.authService.loginRedirect();
    // this.authService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.authService.instance.setActiveAccount(response.account);
    // });
  }

  logout(){
    this.authService.logout();
  }
}
