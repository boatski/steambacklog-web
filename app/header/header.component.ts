import {Component} from 'angular2/core';
import {HeaderDrawerComponent} from './drawer/header-drawer.component';
import {HeaderFixedComponent} from './fixed/header-fixed.component';

@Component({
    selector: 'header',
    directives: [HeaderDrawerComponent, HeaderFixedComponent],
    templateUrl: 'app/header/header.html'
})
export class HeaderComponent { }
