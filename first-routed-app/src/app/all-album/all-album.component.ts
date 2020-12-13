import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.css']
})
export class AllAlbumComponent implements OnInit {
//Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i
  //parametri passati all’url
  routeObs: Observable<ParamMap>;

  AllAlbum : any;
  spotifyServiceObs: Observable<Object>;

  //Usiamo la dependency injection per farci mandare i moduli del routing e dello
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService,
    private location: Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let artistID = params.get('id'); //Ottengo l'id dai parametri
    console.log (artistID); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getAllAlbum(artistID) ;
    this.spotifyServiceObs.subscribe((data)=>this.AllAlbum = data)
  }


  back() : void
  {
    this.location.back();
  }

}
