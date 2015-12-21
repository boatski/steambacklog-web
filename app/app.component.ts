import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {PlayerSummaryComponent} from './main/player-summary/player-summary.component';
import {PlayerGamesComponent} from './main/player-games/player-games.component';

@Component({
    selector: 'app',
    directives: [
      ROUTER_DIRECTIVES,
      HeaderComponent,
      MainComponent,
      PlayerSummaryComponent
    ],
    templateUrl: 'app/app.html'
})
@RouteConfig([
  {path:'/', name: 'Main', component: MainComponent},
  {path:'/summary/:id', name: 'Overview', component: PlayerSummaryComponent}
])
export class AppComponent {
}
