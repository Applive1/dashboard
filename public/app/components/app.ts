import {Component, OnInit, ElementRef, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DrawService} from '../../shared/services/draw.service';
import {HttpService} from '../../shared/services/http.service';
import {DashboardCmp} from '../../dashboard/components/dashboard';
import {HomeCmp} from '../../home/components/home';

declare var jQuery: any;

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, DrawService, HttpService],
  selector: 'my-app',
  templateUrl: 'public/app/components/app.html'
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeCmp,
    useAsDefault: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardCmp
  }
])

export class AppCmp implements OnInit {
  elementRef: ElementRef;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).find('#menu-toggle').click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    })
  }
}
