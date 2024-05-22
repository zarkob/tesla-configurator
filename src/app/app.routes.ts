import { Routes } from '@angular/router';
import {CarConfiguratorComponent} from "./car-configurator/car-configurator.component";

export const routes: Routes = [
  { path: 'step1', component: CarConfiguratorComponent },
  { path: '', redirectTo: 'step1'}
];
