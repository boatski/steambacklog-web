import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';
import {UtilitiesService} from '../../services/utilities.service';

import {PlayerGames} from '../../models/player-games';

import {DurationPipe} from '../../pipes/duration.pipe';

@Component({
    selector: 'player-games',
    templateUrl: 'app/main/player-games/player-games.html',
    pipes: [DurationPipe]
})
export class PlayerGamesComponent {
    games:PlayerGames;

    constructor(private router:Router,
                private routeParams:RouteParams,
                private backlogService:SteamBacklogService,
                private userService:UserService,
                private utilitiesService:UtilitiesService) {

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

    // return the url to the game's logo if a filename exists
    getLogoUrl(game:any):string {
        if (game.img_logo_url) {
            return this.utilitiesService.getGameLogoUrl(game.appid, game.img_logo_url);
        }

        return "assets/images/blank-game-logo.jpg";
    }

    getSteamUrl(game:any):string {
        return this.utilitiesService.getSteamUrl(game.appid);
    }


    getAchievements(appid:string) {
        this.router.navigate(['Achievements', {id: this.userService.getSteamId(), appid: appid}]);
    }
}
