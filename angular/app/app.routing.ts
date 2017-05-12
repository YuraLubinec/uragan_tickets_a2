import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page.component/main-page.component';
import {GameComponent} from './components/game.component/game.component';

export const AppRoutes: Routes = [
     {path: 'tickets', component: MainPageComponent, pathMatch: 'full'},
     { path :'games', component : GameComponent }
];