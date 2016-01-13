import {Injectable} from 'angular2/core';

@Injectable()
export class UtilitiesService {

    steamUrl:String = "http://store.steampowered.com/app/";
    steamImageUrl:String = "http://media.steampowered.com/steamcommunity/public/images/apps/";

    getGameLogoUrl(appid:string, file:string):string {
        return this.steamImageUrl + appid + "/" + file + ".jpg";
    }

    getSteamUrl(appid:string):string {
        return this.steamUrl + appid;
    }
}
