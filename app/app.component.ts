import {Component, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {MainComponent} from './main/main.component';
import {PlayerSummaryComponent} from './main/player-summary/player-summary.component';
import {PlayerGamesComponent} from './main/player-games/player-games.component';

@Component({
    selector: 'app',
    directives: [
      ROUTER_DIRECTIVES,
      MainComponent,
      PlayerSummaryComponent,
      PlayerGamesComponent
    ],
    templateUrl: 'app/app.html'
})
@RouteConfig([
  {path:'/', name: 'Main', component: MainComponent},
  {path:'/summary/:id', name: 'Overview', component: PlayerSummaryComponent},
  {path:'/games/:id', name: 'Games', component: PlayerGamesComponent}
])
export class AppComponent {
  // @Input() steamid:any;

  testa(steamid) {
    console.log(steamid);
  }

  testb() {
    console.log('hey');
  }
}
