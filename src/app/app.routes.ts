import { Routes } from '@angular/router';
import {CarConfiguratorComponent} from "./car-configurator/car-configurator.component";
import {ConfigOptionsComponent} from "./config-options/config-options.component";
import {SummaryComponent} from "./summary/summary.component";

export const routes: Routes = [
  { path: 'step1', component: CarConfiguratorComponent, pathMatch: "full" },
  { path: 'step2', component: ConfigOptionsComponent, pathMatch: "full" },
  { path: 'step3', component: SummaryComponent, pathMatch: "full" },
  { path: '', redirectTo: 'step1', pathMatch: "full"},
  { path: '**', redirectTo: 'step1'}
];
