import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isAuthorized : Boolean;
  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthorized = this.auth.isTokenSet(); //Verifica se sono già autorizzato

    let href = this.router.url;
    console.log(href);

    //Se il componente viene richiamato dopo un'autorizzazione setto il token
    if (href.includes("authorized"))
    {
      let token =  href.split("#access_token=")[1];
      console.log("token: " + token);
      this.auth.setToken(token);
      this.router.navigate['/search']; //Quando ho setatto il token vado sul search component
      this.isAuthorized = true;
    }
  }

  logout()
  {
    this.auth.unsetToken();
    this.isAuthorized = false;
  }

  login()
  {
    this.auth.authorize();
  }

}
