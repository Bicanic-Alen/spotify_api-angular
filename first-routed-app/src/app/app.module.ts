import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllAlbumComponent } from './all-album/all-album.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    TrackComponent,
    AboutComponent,
    SearchComponent,
    AllAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
