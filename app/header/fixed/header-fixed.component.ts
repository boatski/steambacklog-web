import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'header-fixed',
    templateUrl: 'app/header/fixed/header-fixed.html',
    directives: [RouterLink]
})
export class HeaderFixedComponent { }
