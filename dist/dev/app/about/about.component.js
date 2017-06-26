"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var amcharts3_angular_1 = require("@amcharts/amcharts3-angular");
var AboutComponent = (function () {
    function AboutComponent(AmCharts) {
        this.AmCharts = AmCharts;
    }
    AboutComponent.prototype.makeRandomDataProvider = function () {
        var dataProvider = [];
        for (var year = 1950; year <= 2005; ++year) {
            dataProvider.push({
                year: '' + year,
                value: Math.floor(Math.random() * 100) - 50
            });
        }
        return dataProvider;
    };
    AboutComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'New', 'value': 4852
                },
                {
                    'title': 'Returning',
                    'value': 9899
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': 5,
            'radius': '42%',
            'innerRadius': '60%',
            'labelText': '[[title]]',
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-about',
        templateUrl: 'about.component.html',
        styleUrls: ['about.component.css']
    }),
    __metadata("design:paramtypes", [amcharts3_angular_1.AmChartsService])
], AboutComponent);
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxpRUFBOEQ7QUFROUQsSUFBYSxjQUFjO0lBRzFCLHdCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFDbEQsK0NBQXNCLEdBQXRCO1FBQ0EsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDbEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQzFDLENBQUMsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEMsVUFBVSxFQUFFO1lBQ1osTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUU7Z0JBQ2hCO29CQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUk7aUJBQzVCO2dCQUNEO29CQUNBLE9BQU8sRUFBRSxXQUFXO29CQUNwQixPQUFPLEVBQUUsSUFBSTtpQkFDWjthQUNBO1lBQ0QsWUFBWSxFQUFFLE9BQU87WUFDckIsWUFBWSxFQUFFLE9BQU87WUFDckIsYUFBYSxFQUFFLENBQUM7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixhQUFhLEVBQUUsS0FBSztZQUNwQixXQUFXLEVBQUUsV0FBVztTQUN2QixDQUNBLENBQUM7SUFDRixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ2xDLENBQUM7cUNBSTZCLG1DQUFlO0dBSGpDLGNBQWMsQ0FxQzFCO0FBckNZLHdDQUFjIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtQ2hhcnRzU2VydmljZSB9IGZyb20gJ0BhbWNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXG4gc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG4gcHJpdmF0ZSB0aW1lcjogYW55O1xuIHByaXZhdGUgY2hhcnQ6IGFueTtcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIEFtQ2hhcnRzOiBBbUNoYXJ0c1NlcnZpY2UpIHsgfVxuIG1ha2VSYW5kb21EYXRhUHJvdmlkZXIoKSB7XG4gdmFyIGRhdGFQcm92aWRlciA9IFtdO1xuIGZvciAodmFyIHllYXIgPSAxOTUwOyB5ZWFyIDw9IDIwMDU7ICsreWVhcikge1xuIGRhdGFQcm92aWRlci5wdXNoKHtcbiB5ZWFyOiAnJyArIHllYXIsXG4gdmFsdWU6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgLSA1MFxuIH0pO1xuIH1cbiByZXR1cm4gZGF0YVByb3ZpZGVyO1xuIH1cbiBuZ09uSW5pdCgpIHtcbiB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXG4gJ2NoYXJ0ZGl2Jywge1xuICd0eXBlJzogJ3BpZScsXG4gJ3RoZW1lJzogJ2xpZ2h0JyxcbiAnZGF0YVByb3ZpZGVyJzogW1xuIHtcbiAndGl0bGUnOiAnTmV3JywgJ3ZhbHVlJzogNDg1MlxuIH0sXG4ge1xuICd0aXRsZSc6ICdSZXR1cm5pbmcnLFxuICd2YWx1ZSc6IDk4OTlcbiB9XG4gXSxcbiAndGl0bGVGaWVsZCc6ICd0aXRsZScsXG4gJ3ZhbHVlRmllbGQnOiAndmFsdWUnLFxuICdsYWJlbFJhZGl1cyc6IDUsXG4gJ3JhZGl1cyc6ICc0MiUnLFxuICdpbm5lclJhZGl1cyc6ICc2MCUnLFxuICdsYWJlbFRleHQnOiAnW1t0aXRsZV1dJyxcbiB9XG4gKTtcbiB9XG59XG4iXX0=
