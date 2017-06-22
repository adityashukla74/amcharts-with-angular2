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
            "type": "serial",
            "theme": "light",
            "marginTop": 0,
            "marginRight": 80,
            "dataProvider": this.makeRandomDataProvider(),
            "valueAxes": [{
                    "axisAlpha": 0,
                    "position": "left"
                }],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxpRUFBOEQ7QUFVOUQsSUFBYSxjQUFjO0lBR3pCLHdCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFFbEQsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBR3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDaEIsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2FBQzVDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDL0MsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUFFLENBQUM7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixjQUFjLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzdDLFdBQVcsRUFBRSxDQUFDO29CQUNaLFdBQVcsRUFBRSxDQUFDO29CQUNkLFVBQVUsRUFBRSxNQUFNO2lCQUNuQixDQUFDO1lBQ0YsUUFBUSxFQUFFLENBQUM7b0JBQ1QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsYUFBYSxFQUFFLHVFQUF1RTtvQkFDdEYsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFlBQVksRUFBRSxDQUFDO29CQUNmLFdBQVcsRUFBRSxTQUFTO29CQUN0QixlQUFlLEVBQUUsQ0FBQztvQkFDbEIsbUJBQW1CLEVBQUUsU0FBUztvQkFDOUIsTUFBTSxFQUFFLGNBQWM7b0JBQ3RCLFlBQVksRUFBRSxPQUFPO2lCQUN0QixDQUFDO1lBQ0YsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFdBQVcsRUFBRSxDQUFDO2dCQUNkLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixpQkFBaUIsRUFBRSxDQUFDO2dCQUNwQix5QkFBeUIsRUFBRSxHQUFHO2dCQUM5Qix5QkFBeUIsRUFBRSxTQUFTO2dCQUNwQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNuQixlQUFlLEVBQUUsSUFBSTtnQkFDckIsd0JBQXdCLEVBQUUsQ0FBQztnQkFDM0IsZ0JBQWdCLEVBQUUsR0FBRztnQkFDckIsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0Isd0JBQXdCLEVBQUUsU0FBUztnQkFDbkMsd0JBQXdCLEVBQUUsQ0FBQzthQUM1QjtZQUNELGFBQWEsRUFBRTtnQkFDYiwyQkFBMkIsRUFBRSxNQUFNO2dCQUNuQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIseUJBQXlCLEVBQUUsSUFBSTtnQkFDL0IsZ0JBQWdCLEVBQUUsR0FBRztnQkFDckIsV0FBVyxFQUFFLElBQUk7YUFDbEI7WUFDRCxnQkFBZ0IsRUFBRSxNQUFNO1lBQ3hCLGVBQWUsRUFBRSxNQUFNO1lBQ3ZCLGNBQWMsRUFBRTtnQkFDZCxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGdCQUFnQixFQUFFLEdBQUc7Z0JBQ3JCLGtCQUFrQixFQUFFLElBQUk7YUFDekI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLElBQUk7YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBO0FBOUVZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DLENBQUM7cUNBSThCLG1DQUFlO0dBSGxDLGNBQWMsQ0E4RTFCO0FBOUVZLHdDQUFjIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFtQ2hhcnRzU2VydmljZSB9IGZyb20gXCJAYW1jaGFydHMvYW1jaGFydHMzLWFuZ3VsYXJcIjtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Fib3V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG4gIHByaXZhdGUgdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFtQ2hhcnRzOiBBbUNoYXJ0c1NlcnZpY2UpIHsgfVxuXG4gIG1ha2VSYW5kb21EYXRhUHJvdmlkZXIoKSB7XG4gICAgdmFyIGRhdGFQcm92aWRlciA9IFtdO1xuXG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIGRhdGFcbiAgICBmb3IgKHZhciB5ZWFyID0gMTk1MDsgeWVhciA8PSAyMDA1OyArK3llYXIpIHtcbiAgICAgIGRhdGFQcm92aWRlci5wdXNoKHtcbiAgICAgICAgeWVhcjogXCJcIiArIHllYXIsXG4gICAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gNTBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhUHJvdmlkZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gdGhpcy5BbUNoYXJ0cy5tYWtlQ2hhcnQoXCJjaGFydGRpdlwiLCB7XG4gICAgICBcInR5cGVcIjogXCJzZXJpYWxcIixcbiAgICAgIFwidGhlbWVcIjogXCJsaWdodFwiLFxuICAgICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICAgIFwibWFyZ2luUmlnaHRcIjogODAsXG4gICAgICBcImRhdGFQcm92aWRlclwiOiB0aGlzLm1ha2VSYW5kb21EYXRhUHJvdmlkZXIoKSxcbiAgICAgIFwidmFsdWVBeGVzXCI6IFt7XG4gICAgICAgIFwiYXhpc0FscGhhXCI6IDAsXG4gICAgICAgIFwicG9zaXRpb25cIjogXCJsZWZ0XCJcbiAgICAgIH1dLFxuICAgICAgXCJncmFwaHNcIjogW3tcbiAgICAgICAgXCJpZFwiOiBcImcxXCIsXG4gICAgICAgIFwiYmFsbG9vblRleHRcIjogXCJbW2NhdGVnb3J5XV08YnI+PGI+PHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZToxNHB4Oyc+W1t2YWx1ZV1dPC9zcGFuPjwvYj5cIixcbiAgICAgICAgXCJidWxsZXRcIjogXCJyb3VuZFwiLFxuICAgICAgICBcImJ1bGxldFNpemVcIjogOCxcbiAgICAgICAgXCJsaW5lQ29sb3JcIjogXCIjZDE2NTVkXCIsXG4gICAgICAgIFwibGluZVRoaWNrbmVzc1wiOiAyLFxuICAgICAgICBcIm5lZ2F0aXZlTGluZUNvbG9yXCI6IFwiIzYzN2JiNlwiLFxuICAgICAgICBcInR5cGVcIjogXCJzbW9vdGhlZExpbmVcIixcbiAgICAgICAgXCJ2YWx1ZUZpZWxkXCI6IFwidmFsdWVcIlxuICAgICAgfV0sXG4gICAgICBcImNoYXJ0U2Nyb2xsYmFyXCI6IHtcbiAgICAgICAgXCJncmFwaFwiOiBcImcxXCIsXG4gICAgICAgIFwiZ3JpZEFscGhhXCI6IDAsXG4gICAgICAgIFwiY29sb3JcIjogXCIjODg4ODg4XCIsXG4gICAgICAgIFwic2Nyb2xsYmFySGVpZ2h0XCI6IDU1LFxuICAgICAgICBcImJhY2tncm91bmRBbHBoYVwiOiAwLFxuICAgICAgICBcInNlbGVjdGVkQmFja2dyb3VuZEFscGhhXCI6IDAuMSxcbiAgICAgICAgXCJzZWxlY3RlZEJhY2tncm91bmRDb2xvclwiOiBcIiM4ODg4ODhcIixcbiAgICAgICAgXCJncmFwaEZpbGxBbHBoYVwiOiAwLFxuICAgICAgICBcImF1dG9HcmlkQ291bnRcIjogdHJ1ZSxcbiAgICAgICAgXCJzZWxlY3RlZEdyYXBoRmlsbEFscGhhXCI6IDAsXG4gICAgICAgIFwiZ3JhcGhMaW5lQWxwaGFcIjogMC4yLFxuICAgICAgICBcImdyYXBoTGluZUNvbG9yXCI6IFwiI2MyYzJjMlwiLFxuICAgICAgICBcInNlbGVjdGVkR3JhcGhMaW5lQ29sb3JcIjogXCIjODg4ODg4XCIsXG4gICAgICAgIFwic2VsZWN0ZWRHcmFwaExpbmVBbHBoYVwiOiAxXG4gICAgICB9LFxuICAgICAgXCJjaGFydEN1cnNvclwiOiB7XG4gICAgICAgIFwiY2F0ZWdvcnlCYWxsb29uRGF0ZUZvcm1hdFwiOiBcIllZWVlcIixcbiAgICAgICAgXCJjdXJzb3JBbHBoYVwiOiAwLFxuICAgICAgICBcInZhbHVlTGluZUVuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJ2YWx1ZUxpbmVCYWxsb29uRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICBcInZhbHVlTGluZUFscGhhXCI6IDAuNSxcbiAgICAgICAgXCJmdWxsV2lkdGhcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFwiZGF0YURhdGVGb3JtYXRcIjogXCJZWVlZXCIsXG4gICAgICBcImNhdGVnb3J5RmllbGRcIjogXCJ5ZWFyXCIsXG4gICAgICBcImNhdGVnb3J5QXhpc1wiOiB7XG4gICAgICAgIFwibWluUGVyaW9kXCI6IFwiWVlZWVwiLFxuICAgICAgICBcInBhcnNlRGF0ZXNcIjogdHJ1ZSxcbiAgICAgICAgXCJtaW5vckdyaWRBbHBoYVwiOiAwLjEsXG4gICAgICAgIFwibWlub3JHcmlkRW5hYmxlZFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgXCJleHBvcnRcIjoge1xuICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbiJdfQ==
