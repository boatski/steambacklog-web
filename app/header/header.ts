import {bootstrap, Component} from 'angular2/angular2';
import {HeaderDrawer} from './drawer/header-drawer.ts';
import {HeaderFixed} from './fixed/header-fixed.ts';

@Component({
    selector: 'header',
    directives: [HeaderDrawer, HeaderFixed],
    templateUrl: 'app/header/header.html'
})
export class Header { }
