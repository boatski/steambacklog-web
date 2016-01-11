import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {MainComponent} from './main/main.component';
import {PlayerSummaryComponent} from './main/player-summary/player-summary.component';
import {PlayerGamesComponent} from './main/player-games/player-games.component';

import {UserService} from './services/user.service';

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
    {path: '/', name: 'Main', component: MainComponent},
    {path: '/summary/:id', name: 'Overview', component: PlayerSummaryComponent},
    {path: '/games/:id', name: 'Games', component: PlayerGamesComponent}
])
export class AppComponent {
    steamId:string;

    constructor(private userService:UserService) {
    }

    ngDoCheck() {
        this.steamId = this.userService.getSteamId();
    }
}
