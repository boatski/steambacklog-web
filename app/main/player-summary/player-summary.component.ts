import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';
import {UtilitiesService} from '../../services/utilities.service';

import {PlayerSummary} from '../../models/player-summary';

@Component({
    selector: 'player-summary',
    templateUrl: 'app/main/player-summary/player-summary.html'
})
export class PlayerSummaryComponent {
    player:PlayerSummary;

    constructor(private routeParams:RouteParams,
                private backlogService:SteamBacklogService,
                private userService:UserService,
                private utilitiesService:UtilitiesService) {
    }

    ngOnInit() {
        let id = this.routeParams.get('id');

        this.backlogService.getPlayerSummary(id)
            .subscribe(
                res => this.player = new PlayerSummary(
                    res.username,
                    res.updated_at,
                    res.summary.playerBadges,
                    res.summary.playerBans,
                    res.summary.playerSummary,
                    res.summary.playerRecentGames),
                err => console.log(err),
                () => this.userService.setSteamId(this.player.id)
            );
    }

    // return the url to the game's logo if a filename exists
    getLogoUrl(game:any):string {
        if (game.img_logo_url) {
            return this.utilitiesService.getGameLogoUrl(game.appid, game.img_icon_url);
        }

        return "assets/images/blank-game-logo.jpg";
    }

    getSteamUrl(game:any):string {
        return this.utilitiesService.getSteamUrl(game.appid);
    }

    getDate(time:string):Date {
        return new Date(time);
    }
}
