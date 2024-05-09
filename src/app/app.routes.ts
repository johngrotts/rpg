import { Routes } from '@angular/router';
import { MonsterSearchComponent } from './stat-block/monster-search/monster-search.component';

export const routes: Routes = [
  {path: 'home'},
  {path: 'monster-search', component: MonsterSearchComponent},
];
