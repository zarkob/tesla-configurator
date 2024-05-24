import { Component } from '@angular/core';
import {ApiClientService} from "../api-client.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CarColor, CarModel} from "../shared/interfaces";
import {StepsComponent} from "../steps/steps.component";
import {ModelColorComponent} from "../model-color/model-color.component";

@Component({
  selector: 'app-car-configurator',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    NgForOf,
    StepsComponent,
    ModelColorComponent
  ],
  templateUrl: './car-configurator.component.html',
  styleUrl: './car-configurator.component.scss'
})
export class CarConfiguratorComponent {
  models: CarModel[] = [];
  selectedModel?: CarModel;
  selectedColor?: CarColor;

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit(): void {
    this.apiClientService.getModels().subscribe(data => {
      this.models = data;
    });
  }

  onModelChange(model: CarModel): void {
    this.selectedModel = model;
    this.selectedColor = this.selectedModel?.colors[0];
  }

  onColorChange(color: CarColor): void {
    this.selectedColor = color;
  }

  getImageUrl(): string {
    if (!this.selectedModel || !this.selectedColor) {
      return '';
    }
    const model = this.selectedModel.code.toUpperCase();
    const color = this.selectedColor.code.toLowerCase();
    return `https://interstate21.com/tesla-app/images/${model}/${color}.jpg`;
  }
}
