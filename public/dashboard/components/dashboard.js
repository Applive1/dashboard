System.register(['angular2/core', '../../shared/services/draw.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, draw_service_1;
    var DashboardCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (draw_service_1_1) {
                draw_service_1 = draw_service_1_1;
            }],
        execute: function() {
            DashboardCmp = (function () {
                function DashboardCmp(_drawService) {
                    this._drawService = _drawService;
                }
                DashboardCmp.prototype.ngOnInit = function () {
                    var _this = this;
                    google.charts.setOnLoadCallback(function () {
                        var mapArray = [
                            ['Country', 'Population'],
                            ['China', 'China: 1,363,800,000'],
                            ['India', 'India: 1,242,620,000'],
                            ['US', 'US: 317,842,000'],
                            ['Indonesia', 'Indonesia: 247,424,598'],
                            ['Brazil', 'Brazil: 201,032,714'],
                            ['Pakistan', 'Pakistan: 186,134,000'],
                            ['Nigeria', 'Nigeria: 173,615,000'],
                            ['Bangladesh', 'Bangladesh: 152,518,015'],
                            ['Russia', 'Russia: 146,019,512'],
                            ['Japan', 'Japan: 127,120,000']
                        ];
                        var options = { showTip: true };
                        _this.drawMap(mapArray, options);
                    });
                };
                DashboardCmp.prototype.drawMap = function (mapArray, options) {
                    var data = google.visualization.arrayToDataTable(mapArray);
                    this._drawService.drawMap(data, options);
                };
                DashboardCmp = __decorate([
                    core_1.Component({
                        directives: [],
                        providers: [],
                        selector: 'dashboard',
                        templateUrl: 'public/dashboard/components/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [draw_service_1.DrawService])
                ], DashboardCmp);
                return DashboardCmp;
            })();
            exports_1("DashboardCmp", DashboardCmp);
        }
    }
});
//# sourceMappingURL=dashboard.js.map