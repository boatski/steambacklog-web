import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
    let pipe:DurationPipe;
    beforeEach(() => {
        pipe = new DurationPipe();
    });

    // parsing correctly
    it('transforms 1 to "1 hour"', () => {
        expect(pipe.transform(60)).toEqual('1 hour');
    });
    it('transforms 0 to "0 hours"', () => {
        expect(pipe.transform(0)).toEqual('0 hours');
    });
    it('transforms 10 to "10 hours"', () => {
        expect(pipe.transform(600)).toEqual('10 hours');
    });
});