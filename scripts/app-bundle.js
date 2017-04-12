define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
            this.gridData = [{
                    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
                    OrderDate: new Date(8364186e5), Freight: 32.38
                },
                {
                    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
                    OrderDate: new Date(836505e6), Freight: 11.61
                },
                {
                    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
                    OrderDate: new Date(8367642e5), Freight: 65.83
                },
                {
                    OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
                    OrderDate: new Date(8367642e5), Freight: 41.34
                },
                {
                    OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
                    OrderDate: new Date(8368506e5), Freight: 51.3
                }];
        }
        App.prototype.recordClick = function (e) {
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUtFO1lBRkEsWUFBTyxHQUFHLGNBQWMsQ0FBQztZQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQ2YsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO29CQUNsRCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUs7aUJBQy9DO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztvQkFDbEQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLO2lCQUM5QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7b0JBQ2xELFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSztpQkFDL0M7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO29CQUNsRCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUs7aUJBQy9DO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztvQkFDbEQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJO2lCQUM5QyxDQUFDLENBQUM7UUFDSCxDQUFDO1FBRUEseUJBQVcsR0FBWCxVQUFZLENBQUM7UUFFYixDQUFDO1FBQ0gsVUFBQztJQUFELENBL0JELEFBK0JFLElBQUE7SUEvQlcsa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGdyaWREYXRhOiBhbnk7XG5cbiAgbWVzc2FnZSA9ICdIZWxsbyBXb3JsZCEnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB0aGlzLmdyaWREYXRhID0gW3tcbiAgICBPcmRlcklEOiAxMDI0OCwgQ3VzdG9tZXJJRDogJ1ZJTkVUJywgRW1wbG95ZWVJRDogNSxcbiAgICBPcmRlckRhdGU6IG5ldyBEYXRlKDgzNjQxODZlNSksIEZyZWlnaHQ6IDMyLjM4XG4gIH0sXG4gIHtcbiAgICBPcmRlcklEOiAxMDI0OSwgQ3VzdG9tZXJJRDogJ1RPTVNQJywgRW1wbG95ZWVJRDogNixcbiAgICBPcmRlckRhdGU6IG5ldyBEYXRlKDgzNjUwNWU2KSwgRnJlaWdodDogMTEuNjFcbiAgfSxcbiAge1xuICAgIE9yZGVySUQ6IDEwMjUwLCBDdXN0b21lcklEOiAnSEFOQVInLCBFbXBsb3llZUlEOiA0LFxuICAgIE9yZGVyRGF0ZTogbmV3IERhdGUoODM2NzY0MmU1KSwgRnJlaWdodDogNjUuODNcbiAgfSxcbiAge1xuICAgIE9yZGVySUQ6IDEwMjUxLCBDdXN0b21lcklEOiAnVklDVEUnLCBFbXBsb3llZUlEOiAzLFxuICAgIE9yZGVyRGF0ZTogbmV3IERhdGUoODM2NzY0MmU1KSwgRnJlaWdodDogNDEuMzRcbiAgfSxcbiAge1xuICAgIE9yZGVySUQ6IDEwMjUyLCBDdXN0b21lcklEOiAnU1VQUkQnLCBFbXBsb3llZUlEOiA0LFxuICAgIE9yZGVyRGF0ZTogbmV3IERhdGUoODM2ODUwNmU1KSwgRnJlaWdodDogNTEuM1xuICB9XTtcbiAgfVxuXG4gICByZWNvcmRDbGljayhlKSB7XG4gICAgIC8vaGFuZGxlIGV2ZW50IGhlcmVcbiAgIH1cbiB9XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-syncfusion-bridge', function (syncfusion) { return syncfusion.ejTemplate().ejGrid(); });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsMkJBQTJCLEVBQUUsVUFBQyxVQUFVLElBQUssT0FBQSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUV6RixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWZELDhCQWVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLXN5bmNmdXNpb24tYnJpZGdlJywgKHN5bmNmdXNpb24pID0+IHN5bmNmdXNpb24uZWpUZW1wbGF0ZSgpLmVqR3JpZCgpKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"syncfusion-javascript/Content/ej/web/ej.widgets.core.bootstrap.min.css\"></require>\n  <require from=\"syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.theme.min.css\"></require>\n  <div>\n    <ej-grid e-data-source.two-way=\"gridData\" e-allow-paging=true e-allow-sorting=true e-on-record-click.delegate=\"recordClick($event.detail)\">\n      <ej-column e-field=\"OrderID\" e-header-text=\"Order ID\" e-text-align=\"right\"></ej-column>\n      <ej-column e-field=\"CustomerID\" e-header-text=\"Customer ID\"></ej-column>\n      <ej-column e-field=\"EmployeeID\" e-header-text=\"Employee ID\" e-text-align=\"right\"></ej-column>\n      <ej-column e-field=\"Freight\" e-header-text=\"Freight\" e-format=\"{0:C}\" e-text-align=\"right\"></ej-column>\n      <ej-column e-field=\"OrderDate\" e-header-text=\"Order Date\" e-format=\"{0:MM/dd/yyyy}\" e-text-align=\"right\"></ej-column>\n    </ej-grid>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map