import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { ListComponent } from './list/list.component';

import { SurveyHttpService } from "../services/survey.http.service";
import { SurveyService } from "../services/survey.service";
import { SocketService } from "../services/socket.service";
import { routing } from './survey.routing';

import { BarchartComponent } from './../barchart/barchart.component';
// import { BarGraphDirective } from './../bar/bar_graph.directive';

@NgModule({
  imports: [routing, FormsModule, CommonModule],
  // exports: [],
  providers: [SurveyHttpService, SurveyService, SocketService],
  declarations: [ ItemComponent, NewSurveyComponent, ListComponent, BarchartComponent ]
})
export class SurveyModule {}
