System.register(['angular2/core', 'angular2/router', '../../shared/services/draw.service', '../../dashboard/components/dashboard', '../../home/components/home'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, draw_service_1, dashboard_1, home_1;
    var AppCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (draw_service_1_1) {
                draw_service_1 = draw_service_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            AppCmp = (function () {
                function AppCmp() {
                }
                AppCmp = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, draw_service_1.DrawService],
                        selector: 'my-app',
                        templateUrl: 'src/app/components/app.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_1.HomeCmp,
                            useAsDefault: true
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_1.DashboardCmp
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppCmp);
                return AppCmp;
            })();
            exports_1("AppCmp", AppCmp);
        }
    }
});
//# sourceMappingURL=app.js.map