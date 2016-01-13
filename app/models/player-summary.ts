export class PlayerSummary {
    constructor(public id:string,
                public updated_at:string,
                public badges:Object,
                public bans:Object,
                public summary:Object,
                public recentGames:Object) {
        // console.log('badges', badges);
        // console.log('bans', bans);
        // console.log('summary', summary);
    }
}
