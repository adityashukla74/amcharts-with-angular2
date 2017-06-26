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
        this.chart = this.AmCharts.makeChart('chart1div', {
            'type': 'pie',
            "dataTableId": "chartdata",
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
        this.chart = this.AmCharts.makeChart('chart2div', {
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
        this.chart = this.AmCharts.makeChart('chart3div', {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCxpRUFBOEQ7QUFROUQsSUFBYSxjQUFjO0lBSTFCLHdCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFDbEQsK0NBQXNCLEdBQXRCO1FBQ0EsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDbEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQzFDLENBQUMsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEMsV0FBVyxFQUFFO1lBQ2IsTUFBTSxFQUFFLEtBQUs7WUFDYixhQUFhLEVBQUUsV0FBVztZQUMxQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUU7Z0JBQ2hCO29CQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUk7aUJBQzVCO2dCQUNEO29CQUNBLE9BQU8sRUFBRSxXQUFXO29CQUNwQixPQUFPLEVBQUUsSUFBSTtpQkFDWjthQUNBO1lBQ0QsWUFBWSxFQUFFLE9BQU87WUFDckIsWUFBWSxFQUFFLE9BQU87WUFDckIsYUFBYSxFQUFFLENBQUM7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixhQUFhLEVBQUUsS0FBSztZQUNwQixXQUFXLEVBQUUsV0FBVztTQUN2QixDQUNBLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNwQyxXQUFXLEVBQUU7WUFDYixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRTtnQkFDaEI7b0JBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSTtpQkFDNUI7Z0JBQ0Q7b0JBQ0EsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2lCQUNaO2FBQ0E7WUFDRCxZQUFZLEVBQUUsT0FBTztZQUNyQixZQUFZLEVBQUUsT0FBTztZQUNyQixhQUFhLEVBQUUsQ0FBQztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1NBQ3ZCLENBQ0EsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3BDLFdBQVcsRUFBRTtZQUNiLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFO2dCQUNoQjtvQkFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJO2lCQUM1QjtnQkFDRDtvQkFDQSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsT0FBTyxFQUFFLElBQUk7aUJBQ1o7YUFDQTtZQUNELFlBQVksRUFBRSxPQUFPO1lBQ3JCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLEtBQUs7WUFDcEIsV0FBVyxFQUFFLFdBQVc7U0FDdkIsQ0FDQSxDQUFDO0lBQ0YsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FqRkEsQUFpRkMsSUFBQTtBQWpGWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNsQyxDQUFDO3FDQUs2QixtQ0FBZTtHQUpqQyxjQUFjLENBaUYxQjtBQWpGWSx3Q0FBYyIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtQ2hhcnRzU2VydmljZSB9IGZyb20gJ0BhbWNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gc2VsZWN0b3I6ICdzZC1hYm91dCcsXG4gdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXG4gc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gcHJpdmF0ZSB0aW1lcjogYW55O1xuIHByaXZhdGUgY2hhcnQxOiBhbnk7XG4gIHByaXZhdGUgY2hhcnQyOiBhbnk7XG4gY29uc3RydWN0b3IocHJpdmF0ZSBBbUNoYXJ0czogQW1DaGFydHNTZXJ2aWNlKSB7IH1cbiBtYWtlUmFuZG9tRGF0YVByb3ZpZGVyKCkge1xuIHZhciBkYXRhUHJvdmlkZXIgPSBbXTtcbiBmb3IgKHZhciB5ZWFyID0gMTk1MDsgeWVhciA8PSAyMDA1OyArK3llYXIpIHtcbiBkYXRhUHJvdmlkZXIucHVzaCh7XG4geWVhcjogJycgKyB5ZWFyLFxuIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gNTBcbiB9KTtcbiB9XG4gcmV0dXJuIGRhdGFQcm92aWRlcjtcbiB9XG4gbmdPbkluaXQoKSB7XG4gdGhpcy5jaGFydCA9IHRoaXMuQW1DaGFydHMubWFrZUNoYXJ0KFxuICdjaGFydDFkaXYnLCB7XG4gJ3R5cGUnOiAncGllJyxcbiBcImRhdGFUYWJsZUlkXCI6IFwiY2hhcnRkYXRhXCIsXG4gJ3RoZW1lJzogJ2xpZ2h0JyxcbiAnZGF0YVByb3ZpZGVyJzogW1xuIHtcbiAndGl0bGUnOiAnTmV3JywgJ3ZhbHVlJzogNDg1MlxuIH0sXG4ge1xuICd0aXRsZSc6ICdSZXR1cm5pbmcnLFxuICd2YWx1ZSc6IDk4OTlcbiB9XG4gXSxcbiAndGl0bGVGaWVsZCc6ICd0aXRsZScsXG4gJ3ZhbHVlRmllbGQnOiAndmFsdWUnLFxuICdsYWJlbFJhZGl1cyc6IDUsXG4gJ3JhZGl1cyc6ICc0MiUnLFxuICdpbm5lclJhZGl1cyc6ICc2MCUnLFxuICdsYWJlbFRleHQnOiAnW1t0aXRsZV1dJyxcbiB9XG4gKTtcbiB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXG4gJ2NoYXJ0MmRpdicsIHtcbiAndHlwZSc6ICdwaWUnLFxuICd0aGVtZSc6ICdsaWdodCcsXG4gJ2RhdGFQcm92aWRlcic6IFtcbiB7XG4gJ3RpdGxlJzogJ05ldycsICd2YWx1ZSc6IDQ4NTJcbiB9LFxuIHtcbiAndGl0bGUnOiAnUmV0dXJuaW5nJyxcbiAndmFsdWUnOiA5ODk5XG4gfVxuIF0sXG4gJ3RpdGxlRmllbGQnOiAndGl0bGUnLFxuICd2YWx1ZUZpZWxkJzogJ3ZhbHVlJyxcbiAnbGFiZWxSYWRpdXMnOiA1LFxuICdyYWRpdXMnOiAnNDIlJyxcbiAnaW5uZXJSYWRpdXMnOiAnNjAlJyxcbiAnbGFiZWxUZXh0JzogJ1tbdGl0bGVdXScsXG4gfVxuICk7XG4gdGhpcy5jaGFydCA9IHRoaXMuQW1DaGFydHMubWFrZUNoYXJ0KFxuICdjaGFydDNkaXYnLCB7XG4gJ3R5cGUnOiAncGllJyxcbiAndGhlbWUnOiAnbGlnaHQnLFxuICdkYXRhUHJvdmlkZXInOiBbXG4ge1xuICd0aXRsZSc6ICdOZXcnLCAndmFsdWUnOiA0ODUyXG4gfSxcbiB7XG4gJ3RpdGxlJzogJ1JldHVybmluZycsXG4gJ3ZhbHVlJzogOTg5OVxuIH1cbiBdLFxuICd0aXRsZUZpZWxkJzogJ3RpdGxlJyxcbiAndmFsdWVGaWVsZCc6ICd2YWx1ZScsXG4gJ2xhYmVsUmFkaXVzJzogNSxcbiAncmFkaXVzJzogJzQyJScsXG4gJ2lubmVyUmFkaXVzJzogJzYwJScsXG4gJ2xhYmVsVGV4dCc6ICdbW3RpdGxlXV0nLFxuIH1cbiApO1xuIH1cbn1cbn1cbiJdfQ==
