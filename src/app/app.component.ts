import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {CarConfiguratorComponent} from "./car-configurator/car-configurator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CarConfiguratorComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-car-configurator></app-car-configurator>
  `,
})
export class AppComponent {
  name = 'Angular';

}
