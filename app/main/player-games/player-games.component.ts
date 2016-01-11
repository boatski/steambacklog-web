import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';

import {PlayerGames} from '../../models/player-games';

@Component({
    selector: 'player-games',
    templateUrl: 'app/main/player-games/player-games.html'
})
export class PlayerGamesComponent {
    games:PlayerGames;

    steamUrl:String = "http://store.steampowered.com/app/";
    steamImageUrl:String = "http://media.steampowered.com/steamcommunity/public/images/apps/"

    constructor(private router:Router,
                private routeParams:RouteParams,
                private backlogService:SteamBacklogService,
                private userService:UserService) {

    }

    ngOnInit() {
        let id = this.routeParams.get('id');

        this.backlogService.getPlayerGames(id)
            .subscribe(
                res => this.games = new PlayerGames(res.username, res.games.playerGames),
                err => console.log(err),
                () => this.userService.setSteamId(this.games.id)
            );
    }

    getAchievements(appid:any) {
        this.router.navigate(['Achievements', {id: this.userService.getSteamId(), appid: appid}]);
    }
}
