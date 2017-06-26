import { Component, OnInit } from '@angular/core';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
 moduleId: module.id,
 selector: 'sd-about',
 templateUrl: 'about.component.html',
 styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
 private timer: any;
 private chart1: any;
  private chart2: any;
 constructor(private AmCharts: AmChartsService) { }
 makeRandomDataProvider() {
 var dataProvider = [];
 for (var year = 1950; year <= 2005; ++year) {
 dataProvider.push({
 year: '' + year,
 value: Math.floor(Math.random() * 100) - 50
 });
 }
 return dataProvider;
 }
 ngOnInit() {
 this.chart = this.AmCharts.makeChart(
 'chart1div', {
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
 }
 );
 this.chart = this.AmCharts.makeChart(
 'chart2div', {
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
 }
 );
 this.chart = this.AmCharts.makeChart(
 'chart3div', {
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
 }
 );
 }
}
}
