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

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    {
      path: '**',
      component: MainPageComponent,
      pathMatch: 'full'
    }
  ])],
  declarations: [AppComponent, MainPageComponent, SectorComponent, SortBy, Row, SectorPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }