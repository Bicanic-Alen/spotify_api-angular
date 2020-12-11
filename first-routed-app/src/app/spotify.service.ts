
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBf6PlJpRF2-Vb_GDgKcBTC6WyQzY7odQQrpiM8TToJA9mLhaSCq6fk4-kRUMwnJuh6UPmdTMokFI7Bd1FDBW047exVsJJKZSOnU4pAIcSQ7qf34KAriqhK67n7n2rmEMyKIRWTmJ8aSxtn35KiHju9-XLx9ZGUJXM'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
