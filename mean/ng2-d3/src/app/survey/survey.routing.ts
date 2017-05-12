import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },//default path
  { path: 'item', component: ItemComponent },
  { path: 'newSurvey', component: NewSurveyComponent },
  { path: 'list', component: ListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);