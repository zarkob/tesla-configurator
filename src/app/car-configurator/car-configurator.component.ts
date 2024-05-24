import {Component, OnInit} from '@angular/core';
import {ApiClientService} from "../api-client.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CarModel} from "../shared/interfaces";
import {StepsComponent} from "../steps/steps.component";
import {ModelColorComponent} from "../model-color/model-color.component";
import {ConfigOptionsComponent} from "../config-options/config-options.component";
import {State} from "../shared/state";
import {CarImageComponent} from "../car-image/car-image.component";

@Component({
  selector: 'app-car-configurator',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    NgForOf,
    StepsComponent,
    ModelColorComponent,
    ConfigOptionsComponent,
    AsyncPipe,
    CarImageComponent
  ],
  templateUrl: './car-configurator.component.html',
  styleUrl: './car-configurator.component.scss'
})
export class CarConfiguratorComponent implements OnInit{
  models: CarModel[] = [];

  constructor(private apiClientService: ApiClientService, protected state: State) {}

  ngOnInit(): void {
    this.apiClientService.getModels().subscribe(data => {
      this.models = data;
    });
  }

}
