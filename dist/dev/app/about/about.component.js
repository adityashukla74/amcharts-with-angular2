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
            'dataTableId': 'chartdata',
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
        this.chart = this.AmCharts.makeChart('chart4div', {
            'type': 'pie',
            'dataTableId': 'chartdata',
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
        this.chart = this.AmCharts.makeChart('chart5div', {
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
        this.chart = this.AmCharts.makeChart('chart6div', {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCxpRUFBOEQ7QUFTOUQsSUFBYSxjQUFjO0lBTTFCLHdCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFDL0MsK0NBQXNCLEdBQXRCO1FBQ0ksSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDekMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDbEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQzFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDaEMsV0FBVyxFQUFFO1lBQ1QsTUFBTSxFQUFFLEtBQUs7WUFDYixhQUFhLEVBQUUsV0FBVztZQUMxQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUU7Z0JBQ1o7b0JBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSTtpQkFDNUI7Z0JBQ0Q7b0JBQ0EsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2lCQUNaO2FBQ0o7WUFDRCxZQUFZLEVBQUUsT0FBTztZQUNyQixZQUFZLEVBQUUsT0FBTztZQUNyQixhQUFhLEVBQUUsQ0FBQztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLGFBQWEsRUFBRSxLQUFLO1lB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LFlBQVksRUFBRSxPQUFPO1lBQ3JCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLEtBQUs7WUFDcEIsV0FBVyxFQUFFLFdBQVc7U0FDdkIsQ0FDUixDQUFDO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FuSkEsQUFtSkMsSUFBQTtBQW5KWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNsQyxDQUFDO3FDQU82QixtQ0FBZTtHQU5qQyxjQUFjLENBbUoxQjtBQW5KWSx3Q0FBYyIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtQ2hhcnRzU2VydmljZSB9IGZyb20gJ0BhbWNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhcic7XG5pbXBvcnQgeyBNZFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5kZWNsYXJlIGxldCBjaGFydDogYW55O1xuQENvbXBvbmVudCh7XG4gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiBzZWxlY3RvcjogJ3NkLWFib3V0JyxcbiB0ZW1wbGF0ZVVybDogJ2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHRpbWVyOiBhbnk7XG4gICAgcHJpdmF0ZSBjaGFydDogYW55O1xuICAgIHByaXZhdGUgY2hhcnQxOiBhbnk7XG4gICAgcHJpdmF0ZSBjaGFydDI6IGFueTtcbiAgICBwcml2YXRlIGNoYXJ0MzogYW55O1xuIGNvbnN0cnVjdG9yKHByaXZhdGUgQW1DaGFydHM6IEFtQ2hhcnRzU2VydmljZSkgeyB9XG4gICAgbWFrZVJhbmRvbURhdGFQcm92aWRlcigpIHtcbiAgICAgICAgdmFyIGRhdGFQcm92aWRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciB5ZWFyID0gMTk1MDsgeWVhciA8PSAyMDA1OyArK3llYXIpIHtcbiAgICAgICAgICAgIGRhdGFQcm92aWRlci5wdXNoKHtcbiAgICAgICAgICAgIHllYXI6ICcnICsgeWVhcixcbiAgICAgICAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gNTBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhUHJvdmlkZXI7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXG4gICAgICAgICAgICAnY2hhcnQxZGl2Jywge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ3BpZScsXG4gICAgICAgICAgICAgICAgJ2RhdGFUYWJsZUlkJzogJ2NoYXJ0ZGF0YScsXG4gICAgICAgICAgICAgICAgJ3RoZW1lJzogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAnZGF0YVByb3ZpZGVyJzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdOZXcnLCAndmFsdWUnOiA0ODUyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1JldHVybmluZycsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDk4OTlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ3RpdGxlRmllbGQnOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICd2YWx1ZUZpZWxkJzogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAnbGFiZWxSYWRpdXMnOiA1LFxuICAgICAgICAgICAgICAgICdyYWRpdXMnOiAnNDIlJyxcbiAgICAgICAgICAgICAgICAnaW5uZXJSYWRpdXMnOiAnNjAlJyxcbiAgICAgICAgICAgICAgICAnbGFiZWxUZXh0JzogJ1tbdGl0bGVdXScsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXG4gICAgICAgICAgICAnY2hhcnQyZGl2Jywge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ3BpZScsXG4gICAgICAgICAgICAgICAgJ3RoZW1lJzogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAnZGF0YVByb3ZpZGVyJzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdOZXcnLCAndmFsdWUnOiA0ODUyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1JldHVybmluZycsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDk4OTlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICd0aXRsZUZpZWxkJzogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAndmFsdWVGaWVsZCc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsUmFkaXVzJzogNSxcbiAgICAgICAgICAgICAgICAncmFkaXVzJzogJzQyJScsXG4gICAgICAgICAgICAgICAgJ2lubmVyUmFkaXVzJzogJzYwJScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsVGV4dCc6ICdbW3RpdGxlXV0nLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXG4gICAgICAgICAgICAnY2hhcnQzZGl2Jywge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ3BpZScsXG4gICAgICAgICAgICAgICAgJ3RoZW1lJzogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAnZGF0YVByb3ZpZGVyJzogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdOZXcnLCAndmFsdWUnOiA0ODUyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1JldHVybmluZycsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDk4OTlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICd0aXRsZUZpZWxkJzogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAndmFsdWVGaWVsZCc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsUmFkaXVzJzogNSxcbiAgICAgICAgICAgICAgICAncmFkaXVzJzogJzQyJScsXG4gICAgICAgICAgICAgICAgJ2lubmVyUmFkaXVzJzogJzYwJScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsVGV4dCc6ICdbW3RpdGxlXV0nLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFydCA9IHRoaXMuQW1DaGFydHMubWFrZUNoYXJ0KFxuICAgICAgICAgICAgJ2NoYXJ0NGRpdicsIHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdwaWUnLFxuICAgICAgICAgICAgICAgICdkYXRhVGFibGVJZCc6ICdjaGFydGRhdGEnLFxuICAgICAgICAgICAgICAgICd0aGVtZSc6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgJ2RhdGFQcm92aWRlcic6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTmV3JywgJ3ZhbHVlJzogNDg1MlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdSZXR1cm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiA5ODk5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICd0aXRsZUZpZWxkJzogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAndmFsdWVGaWVsZCc6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsUmFkaXVzJzogNSxcbiAgICAgICAgICAgICAgICAncmFkaXVzJzogJzQyJScsXG4gICAgICAgICAgICAgICAgJ2lubmVyUmFkaXVzJzogJzYwJScsXG4gICAgICAgICAgICAgICAgJ2xhYmVsVGV4dCc6ICdbW3RpdGxlXV0nLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFydCA9IHRoaXMuQW1DaGFydHMubWFrZUNoYXJ0KFxuICAgICAgICAgICAgJ2NoYXJ0NWRpdicsIHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdwaWUnLFxuICAgICAgICAgICAgICAgICd0aGVtZSc6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgJ2RhdGFQcm92aWRlcic6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTmV3JywgJ3ZhbHVlJzogNDg1MlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdSZXR1cm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiA5ODk5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAndGl0bGVGaWVsZCc6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlRmllbGQnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICdsYWJlbFJhZGl1cyc6IDUsXG4gICAgICAgICAgICAgICAgJ3JhZGl1cyc6ICc0MiUnLFxuICAgICAgICAgICAgICAgICdpbm5lclJhZGl1cyc6ICc2MCUnLFxuICAgICAgICAgICAgICAgICdsYWJlbFRleHQnOiAnW1t0aXRsZV1dJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFydCA9IHRoaXMuQW1DaGFydHMubWFrZUNoYXJ0KFxuICAgICAgICAgICAgJ2NoYXJ0NmRpdicsIHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdwaWUnLFxuICAgICAgICAgICAgICAgICd0aGVtZSc6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgJ2RhdGFQcm92aWRlcic6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTmV3JywgJ3ZhbHVlJzogNDg1MlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdSZXR1cm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiA5ODk5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAndGl0bGVGaWVsZCc6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlRmllbGQnOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICdsYWJlbFJhZGl1cyc6IDUsXG4gICAgICAgICAgICAgICAgJ3JhZGl1cyc6ICc0MiUnLFxuICAgICAgICAgICAgICAgICdpbm5lclJhZGl1cyc6ICc2MCUnLFxuICAgICAgICAgICAgICAgICdsYWJlbFRleHQnOiAnW1t0aXRsZV1dJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
