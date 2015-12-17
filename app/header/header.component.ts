import {Component} from 'angular2/core';
import {HeaderDrawerComponent} from './drawer/headerDrawer.component';
import {HeaderFixedComponent} from './fixed/headerFixed.component';

@Component({
    selector: 'header',
    directives: [HeaderDrawerComponent, HeaderFixedComponent],
    templateUrl: 'app/header/header.html'
})
export class HeaderComponent { }
