'use strict'
import {OrderByPipe} from './orderBy.pipe';
import any = jasmine.any;

describe('OrderByPipe', () => {
    let data:Object[];
    let pipe:OrderByPipe;

    beforeEach(() => {
        pipe = new OrderByPipe();
        data = [
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            },
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            },
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            }
        ];
    });

    it('transforms object array by name ascending', () => {
        let temp = [
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            },
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            },
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            }
        ];

        expect(pipe.transform(data, ["+name"])).toEqual(temp);
    });

    it('transforms object array by name descending', () => {
        let temp = [
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            },
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            },
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            }
        ];

        expect(pipe.transform(data, ["-name"])).toEqual(temp);
    });

    it('transforms object array by appid ascending', () => {
        let temp = [
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            },
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            },
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            }
        ];

        expect(pipe.transform(data, ["+appid"])).toEqual(temp);
    });

    it('transforms object array by appid descending', () => {
        let temp = [
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            },
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            },
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            }
        ];

        expect(pipe.transform(data, ["-appid"])).toEqual(temp);
    });

    it('transforms object array by playtime_forever ascending', () => {
        let temp = [
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            },
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            },
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            }
        ];

        expect(pipe.transform(data, ["+playtime_forever"])).toEqual(temp);
    });

    it('transforms object array by playtime_forever descending', () => {
        let temp = [
            {
                appid: 4,
                name: "Diablo 3",
                playtime_forever: 4818
            },
            {
                appid: 1,
                name: "Just Cause 3",
                playtime_forever: 300
            },
            {
                appid: 2,
                name: "7 Days to Die",
                playtime_forever: 10
            }
        ];

        expect(pipe.transform(data, ["-playtime_forever"])).toEqual(temp);
    });
});