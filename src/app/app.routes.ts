import { Routes } from '@angular/router';
import {CarConfiguratorComponent} from "./car-configurator/car-configurator.component";

export const routes: Routes = [
  { path: 'step1', component: CarConfiguratorComponent, pathMatch: "full" },
  { path: '', redirectTo: 'step1', pathMatch: "full"}
];
