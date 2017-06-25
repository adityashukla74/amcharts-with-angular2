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
                year: "" + year,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxpRUFBOEQ7QUFROUQsSUFBYSxjQUFjO0lBR3pCLHdCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFDbEQsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDaEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQzVDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDbEMsVUFBVSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUU7Z0JBQ1o7b0JBQ0EsT0FBTyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUUsSUFBSTtpQkFDM0I7Z0JBQ0Q7b0JBQ0EsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2lCQUNaO2FBQ0o7WUFDRCxZQUFZLEVBQUUsT0FBTztZQUNyQixZQUFZLEVBQUUsT0FBTztZQUNyQixhQUFhLEVBQUUsQ0FBQztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1NBQzNCLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFyQ1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkMsQ0FBQztxQ0FJOEIsbUNBQWU7R0FIbEMsY0FBYyxDQXFDMUI7QUFyQ1ksd0NBQWMiLCJmaWxlIjoiYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW1DaGFydHNTZXJ2aWNlIH0gZnJvbSBcIkBhbWNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSB0aW1lcjogYW55O1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgQW1DaGFydHM6IEFtQ2hhcnRzU2VydmljZSkgeyB9XG4gIG1ha2VSYW5kb21EYXRhUHJvdmlkZXIoKSB7XG4gICAgdmFyIGRhdGFQcm92aWRlciA9IFtdO1xuICAgIGZvciAodmFyIHllYXIgPSAxOTUwOyB5ZWFyIDw9IDIwMDU7ICsreWVhcikge1xuICAgICAgZGF0YVByb3ZpZGVyLnB1c2goe1xuICAgICAgICB5ZWFyOiBcIlwiICsgeWVhcixcbiAgICAgICAgdmFsdWU6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgLSA1MFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhUHJvdmlkZXI7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuQW1DaGFydHMubWFrZUNoYXJ0KFxuICAgICAgJ2NoYXJ0ZGl2Jywge1xuICAgICAgICAgICd0eXBlJzogJ3BpZScsXG4gICAgICAgICAgJ3RoZW1lJzogJ2xpZ2h0JyxcbiAgICAgICAgICAnZGF0YVByb3ZpZGVyJzogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICd0aXRsZSc6ICdOZXcnLCd2YWx1ZSc6IDQ4NTJcbiAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ3RpdGxlJzogJ1JldHVybmluZycsXG4gICAgICAgICAgICAgICd2YWx1ZSc6IDk4OTlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgJ3RpdGxlRmllbGQnOiAndGl0bGUnLFxuICAgICAgICAgICd2YWx1ZUZpZWxkJzogJ3ZhbHVlJyxcbiAgICAgICAgICAnbGFiZWxSYWRpdXMnOiA1LFxuICAgICAgICAgICdyYWRpdXMnOiAnNDIlJyxcbiAgICAgICAgICAnaW5uZXJSYWRpdXMnOiAnNjAlJyxcbiAgICAgICAgICAnbGFiZWxUZXh0JzogJ1tbdGl0bGVdXScsXG4gICAgICB9XG4gICAgKVxuICB9XG59Il19
