import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {

    transform(value:number) : any {
        let duration = (value / 60).toFixed(0);
        let hr = (duration === "1") ? " hour" : " hours";
        return duration + hr;
    }
}