import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page.component/main-page.component';
import { SectorComponent } from './components/sector.component/sector.component';
import { SortBy } from './components/sector.component/sortBy.pipe';
import { Row } from './components/sector.component/row.pipe';
import { SectorPipe } from './components/main-page.component/sectorPipe.pipe';
import {HeaderComponent} from './components/header.component/header.component';
import {GameComponent} from './components/game.component/game.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, 
  RouterModule.forRoot([
    {path: 'tickets', component: MainPageComponent, pathMatch: 'full'},
    { path :'games', component : GameComponent }
  ])
],
  declarations: [AppComponent, MainPageComponent, SectorComponent, SortBy, Row, SectorPipe, HeaderComponent,GameComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }