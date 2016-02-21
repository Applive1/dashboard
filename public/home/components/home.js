System.register(['angular2/core', '../../shared/services/draw.service', '../../shared/services/http.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, draw_service_1, http_service_1;
    var HomeCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (draw_service_1_1) {
                draw_service_1 = draw_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            HomeCmp = (function () {
                function HomeCmp(_drawService, _httpService) {
                    this._drawService = _drawService;
                    this._httpService = _httpService;
                }
                HomeCmp.prototype.ngOnInit = function () {
                    var _this = this;
                    google.charts.setOnLoadCallback(function () {
                        var options = {
                            title: 'My Daily Activities'
                        };
                        _this._httpService.getAllStats('stats').subscribe(function (data) {
                            var dataArray = data[0].dataArray;
                            _this.drawChart(dataArray, options);
                        });
                    });
                };
                HomeCmp.prototype.drawChart = function (pieChartArray, options) {
                    var data = google.visualization.arrayToDataTable(pieChartArray);
                    this._drawService.drawPieChart(data, options);
                };
                HomeCmp = __decorate([
                    core_1.Component({
                        directives: [],
                        providers: [],
                        selector: 'home',
                        templateUrl: 'public/home/components/home.html'
                    }), 
                    __metadata('design:paramtypes', [draw_service_1.DrawService, http_service_1.HttpService])
                ], HomeCmp);
                return HomeCmp;
            })();
            exports_1("HomeCmp", HomeCmp);
        }
    }
});
//# sourceMappingURL=home.js.map