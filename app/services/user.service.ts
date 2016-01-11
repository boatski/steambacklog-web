import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
    private steamid:string;

    constructor() {
    }

    getSteamId() {
        return this.steamid;
    }

    setSteamId(id) {
        this.steamid = id;
    }
}
