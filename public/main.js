System.register(['angular2/platform/browser', './app/components/app', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, app_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_1.AppCmp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map