import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'survey', pathMatch: 'full' },//default path
  { path: 'survey', loadChildren: './survey/survey.module#SurveyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
 