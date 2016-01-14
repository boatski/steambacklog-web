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
@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

    transform(array:any, args:string[]) : any {
        if (typeof args[0] === "undefined") {
            return array;
        }

        let direction   = args[0][0];
        let column      = args[0].slice(1);

        array.sort((a: any, b: any) => {

            let left    = a[column];
            let right   = b[column];

            if (left > right)
                return (direction === "+") ? 1 : -1;

            if (left < right)
                return (direction === "+") ? -1 : 1;

            return 0;
        });

        return array;
    }
}