import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

@NgModule({
  imports: [CommonModule, AboutRoutingModule, AmChartsModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
