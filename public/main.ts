import {bootstrap} from 'angular2/platform/browser';
import {AppCmp} from './app/components/app';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

bootstrap(AppCmp, [HTTP_PROVIDERS]);
