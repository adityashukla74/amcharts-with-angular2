"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var about_component_1 = require("./about.component");
var about_routing_module_1 = require("./about-routing.module");
var amcharts3_angular_1 = require("@amcharts/amcharts3-angular");
var material_1 = require("@angular/material");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, about_routing_module_1.AboutRoutingModule, amcharts3_angular_1.AmChartsModule, material_1.MdToolbarModule],
        declarations: [about_component_1.AboutComponent],
        exports: [about_component_1.AboutComponent]
    })
], AboutModule);
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MscURBQW1EO0FBQ25ELCtEQUE0RDtBQUM1RCxpRUFBNkQ7QUFDN0QsOENBQW9EO0FBT3BELElBQWEsV0FBVztJQUF4QjtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsV0FBVztJQUx2QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHlDQUFrQixFQUFFLGtDQUFjLEVBQUUsMEJBQWUsQ0FBQztRQUM1RSxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDMUIsQ0FBQztHQUNXLFdBQVcsQ0FBSTtBQUFmLGtDQUFXIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hYm91dC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBbUNoYXJ0c01vZHVsZSB9IGZyb20gJ0BhbWNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhcic7XG5pbXBvcnQgeyBNZFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFib3V0Um91dGluZ01vZHVsZSwgQW1DaGFydHNNb2R1bGUsIE1kVG9vbGJhck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0Fib3V0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Fib3V0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dE1vZHVsZSB7IH1cbiJdfQ==
