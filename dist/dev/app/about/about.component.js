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
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "theme": "light",
            "dataProvider": [{
                    "title": "New",
                    "value": 4852
                }, {
                    "title": "Returning",
                    "value": 9899
                }],
            "titleField": "title",
            "valueField": "value",
            "labelRadius": 5,
            "radius": "42%",
            "innerRadius": "60%",
            "labelText": "[[title]]",
            "export": {
                "enabled": true
            },
            "graphs": [{
                    "id": "g1",
                    "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    "bullet": "round",
                    "bulletSize": 8,
                    "lineColor": "#d1655d",
                    "lineThickness": 2,
                    "negativeLineColor": "#637bb6",
                    "type": "smoothedLine",
                    "valueField": "value"
                }],
            "chartScrollbar": {
                "graph": "g1",
                "gridAlpha": 0,
                "color": "#888888",
                "scrollbarHeight": 55,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "autoGridCount": true,
                "selectedGraphFillAlpha": 0,
                "graphLineAlpha": 0.2,
                "graphLineColor": "#c2c2c2",
                "selectedGraphLineColor": "#888888",
                "selectedGraphLineAlpha": 1
            },
            "chartCursor": {
                "categoryBalloonDateFormat": "YYYY",
                "cursorAlpha": 0,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": 0.5,
                "fullWidth": true
            },
            "dataDateFormat": "YYYY",
            "categoryField": "year",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "minorGridAlpha": 0.1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxpRUFBOEQ7QUFVOUQsSUFBYSxjQUFjO0lBR3pCLHdCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFFbEQsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBR3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDaEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQzVDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEtBQUs7WUFDUCxPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsQ0FBRTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDRCxPQUFPLEVBQUUsV0FBVztvQkFDcEIsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBRTtZQUNILFlBQVksRUFBRSxPQUFPO1lBQ3JCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxDQUFDO1lBRWhCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLEtBQUs7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsUUFBUSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1lBQ1AsUUFBUSxFQUFFLENBQUM7b0JBQ1QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsYUFBYSxFQUFFLHVFQUF1RTtvQkFDdEYsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFlBQVksRUFBRSxDQUFDO29CQUNmLFdBQVcsRUFBRSxTQUFTO29CQUN0QixlQUFlLEVBQUUsQ0FBQztvQkFDbEIsbUJBQW1CLEVBQUUsU0FBUztvQkFDOUIsTUFBTSxFQUFFLGNBQWM7b0JBQ3RCLFlBQVksRUFBRSxPQUFPO2lCQUN0QixDQUFDO1lBQ0YsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFdBQVcsRUFBRSxDQUFDO2dCQUNkLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixpQkFBaUIsRUFBRSxDQUFDO2dCQUNwQix5QkFBeUIsRUFBRSxHQUFHO2dCQUM5Qix5QkFBeUIsRUFBRSxTQUFTO2dCQUNwQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNuQixlQUFlLEVBQUUsSUFBSTtnQkFDckIsd0JBQXdCLEVBQUUsQ0FBQztnQkFDM0IsZ0JBQWdCLEVBQUUsR0FBRztnQkFDckIsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0Isd0JBQXdCLEVBQUUsU0FBUztnQkFDbkMsd0JBQXdCLEVBQUUsQ0FBQzthQUM1QjtZQUNELGFBQWEsRUFBRTtnQkFDYiwyQkFBMkIsRUFBRSxNQUFNO2dCQUNuQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIseUJBQXlCLEVBQUUsSUFBSTtnQkFDL0IsZ0JBQWdCLEVBQUUsR0FBRztnQkFDckIsV0FBVyxFQUFFLElBQUk7YUFDbEI7WUFDRCxnQkFBZ0IsRUFBRSxNQUFNO1lBQ3hCLGVBQWUsRUFBRSxNQUFNO1lBQ3ZCLGNBQWMsRUFBRTtnQkFDZCxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGdCQUFnQixFQUFFLEdBQUc7Z0JBQ3JCLGtCQUFrQixFQUFFLElBQUk7YUFDekI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLElBQUk7YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQXhGQSxBQXdGQyxJQUFBO0FBeEZZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DLENBQUM7cUNBSThCLG1DQUFlO0dBSGxDLGNBQWMsQ0F3RjFCO0FBeEZZLHdDQUFjIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtQ2hhcnRzU2VydmljZSB9IGZyb20gXCJAYW1jaGFydHMvYW1jaGFydHMzLWFuZ3VsYXJcIjtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG4gIHByaXZhdGUgdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFtQ2hhcnRzOiBBbUNoYXJ0c1NlcnZpY2UpIHsgfVxuXG4gIG1ha2VSYW5kb21EYXRhUHJvdmlkZXIoKSB7XG4gICAgdmFyIGRhdGFQcm92aWRlciA9IFtdO1xuXG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIGRhdGFcbiAgICBmb3IgKHZhciB5ZWFyID0gMTk1MDsgeWVhciA8PSAyMDA1OyArK3llYXIpIHtcbiAgICAgIGRhdGFQcm92aWRlci5wdXNoKHtcbiAgICAgICAgeWVhcjogXCJcIiArIHllYXIsXG4gICAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gNTBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhUHJvdmlkZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXCJjaGFydGRpdlwiLCB7XG4gICAgICBcInR5cGVcIjogXCJwaWVcIixcbiAgICAgICAgICAgIFwidGhlbWVcIjogXCJsaWdodFwiLFxuICAgICAgICAgICAgXCJkYXRhUHJvdmlkZXJcIjogWyB7XG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJOZXdcIixcbiAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0ODUyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJSZXR1cm5pbmdcIixcbiAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA5ODk5XG4gICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBcInRpdGxlRmllbGRcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgXCJ2YWx1ZUZpZWxkXCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgIFwibGFiZWxSYWRpdXNcIjogNSxcbiAgICAgICAgICBcbiAgICAgICAgICAgIFwicmFkaXVzXCI6IFwiNDIlXCIsXG4gICAgICAgICAgICBcImlubmVyUmFkaXVzXCI6IFwiNjAlXCIsXG4gICAgICAgICAgICBcImxhYmVsVGV4dFwiOiBcIltbdGl0bGVdXVwiLFxuICAgICAgICAgICAgXCJleHBvcnRcIjoge1xuICAgICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgIFwiZ3JhcGhzXCI6IFt7XG4gICAgICAgIFwiaWRcIjogXCJnMVwiLFxuICAgICAgICBcImJhbGxvb25UZXh0XCI6IFwiW1tjYXRlZ29yeV1dPGJyPjxiPjxzcGFuIHN0eWxlPSdmb250LXNpemU6MTRweDsnPltbdmFsdWVdXTwvc3Bhbj48L2I+XCIsXG4gICAgICAgIFwiYnVsbGV0XCI6IFwicm91bmRcIixcbiAgICAgICAgXCJidWxsZXRTaXplXCI6IDgsXG4gICAgICAgIFwibGluZUNvbG9yXCI6IFwiI2QxNjU1ZFwiLFxuICAgICAgICBcImxpbmVUaGlja25lc3NcIjogMixcbiAgICAgICAgXCJuZWdhdGl2ZUxpbmVDb2xvclwiOiBcIiM2MzdiYjZcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic21vb3RoZWRMaW5lXCIsXG4gICAgICAgIFwidmFsdWVGaWVsZFwiOiBcInZhbHVlXCJcbiAgICAgIH1dLFxuICAgICAgXCJjaGFydFNjcm9sbGJhclwiOiB7XG4gICAgICAgIFwiZ3JhcGhcIjogXCJnMVwiLFxuICAgICAgICBcImdyaWRBbHBoYVwiOiAwLFxuICAgICAgICBcImNvbG9yXCI6IFwiIzg4ODg4OFwiLFxuICAgICAgICBcInNjcm9sbGJhckhlaWdodFwiOiA1NSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kQWxwaGFcIjogMCxcbiAgICAgICAgXCJzZWxlY3RlZEJhY2tncm91bmRBbHBoYVwiOiAwLjEsXG4gICAgICAgIFwic2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3JcIjogXCIjODg4ODg4XCIsXG4gICAgICAgIFwiZ3JhcGhGaWxsQWxwaGFcIjogMCxcbiAgICAgICAgXCJhdXRvR3JpZENvdW50XCI6IHRydWUsXG4gICAgICAgIFwic2VsZWN0ZWRHcmFwaEZpbGxBbHBoYVwiOiAwLFxuICAgICAgICBcImdyYXBoTGluZUFscGhhXCI6IDAuMixcbiAgICAgICAgXCJncmFwaExpbmVDb2xvclwiOiBcIiNjMmMyYzJcIixcbiAgICAgICAgXCJzZWxlY3RlZEdyYXBoTGluZUNvbG9yXCI6IFwiIzg4ODg4OFwiLFxuICAgICAgICBcInNlbGVjdGVkR3JhcGhMaW5lQWxwaGFcIjogMVxuICAgICAgfSxcbiAgICAgIFwiY2hhcnRDdXJzb3JcIjoge1xuICAgICAgICBcImNhdGVnb3J5QmFsbG9vbkRhdGVGb3JtYXRcIjogXCJZWVlZXCIsXG4gICAgICAgIFwiY3Vyc29yQWxwaGFcIjogMCxcbiAgICAgICAgXCJ2YWx1ZUxpbmVFbmFibGVkXCI6IHRydWUsXG4gICAgICAgIFwidmFsdWVMaW5lQmFsbG9vbkVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJ2YWx1ZUxpbmVBbHBoYVwiOiAwLjUsXG4gICAgICAgIFwiZnVsbFdpZHRoXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcImRhdGFEYXRlRm9ybWF0XCI6IFwiWVlZWVwiLFxuICAgICAgXCJjYXRlZ29yeUZpZWxkXCI6IFwieWVhclwiLFxuICAgICAgXCJjYXRlZ29yeUF4aXNcIjoge1xuICAgICAgICBcIm1pblBlcmlvZFwiOiBcIllZWVlcIixcbiAgICAgICAgXCJwYXJzZURhdGVzXCI6IHRydWUsXG4gICAgICAgIFwibWlub3JHcmlkQWxwaGFcIjogMC4xLFxuICAgICAgICBcIm1pbm9yR3JpZEVuYWJsZWRcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFwiZXhwb3J0XCI6IHtcbiAgICAgICAgXCJlbmFibGVkXCI6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4iXX0=
