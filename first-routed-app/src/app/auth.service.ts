import { Injectable } from '@angular/core';
import { AuthConfig } from './models/authConfig.model';
import {ScopesBuilder} from './models/spotifyScope.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token : string = "";
  requestAuthUrl = 'https://accounts.spotify.com/authorize';
  authConfig: AuthConfig = {
    client_id: "349c705ef41345f78a72bea003ef086d",  // WebPortal App Id. Shoud be config
    response_type: "token",
    redirect_uri: "https://4200-b62af0f8-bd88-47b8-ab57-6c606af19453.ws-eu03.gitpod.io/authorized",  // My URL
    state: "",
    show_dialog: true,
    scope: new ScopesBuilder().withScopes(ScopesBuilder.LIBRARY).build()
  };

  constructor(private http : HttpClient) { }

  public authorize()
  {
    const url = this.buildAuthUrl();
    console.log("url:" + url);
    //Le api di spotify non accettano XMLHttpRequest per ottenere token.
    //Faccio una richiesta standard
    window.location.href = this.buildAuthUrl();
  }

  public setToken(token: string)
  {
    this.token = "Bearer " + token;
  }

  public unsetToken()
  {
    this.token = "";
  }

  public getToken()
  {
    return this.token;
  }

  isTokenSet () : Boolean
  {
    if (this.token.includes("Bearer")) return true;
    else return false;
  }

  //Questa parte la prendiamo così dalla libreria
  private buildAuthUrl(): string{

    let params = [];
    for (const [key, value] of Object.entries(this.authConfig)) {
      if(typeof(value) == 'object'){
        params.push(`${key}=${(value as string[]).join(" ")}`);
      }else{
        params.push(`${key}=${value}`);
      }
    }

    return `${this.requestAuthUrl}?${params.join('&')}`;
  }
}
