import { Component } from '@angular/core';
import {ApiClientService} from "../api-client.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CarColor, CarModel} from "../shared/interfaces";
import {StepsComponent} from "../steps/steps.component";

@Component({
  selector: 'app-car-configurator',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    NgForOf,
    StepsComponent
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

  onModelChange(): void {
    this.selectedColor = this.selectedModel?.colors[0];
  }

  onColorChange(): void { }

  getImageUrl(): string {
    if (!this.selectedModel || !this.selectedColor) {
      return '';
    }
    const model = this.selectedModel.code.toUpperCase();
    const color = this.selectedColor.code.toLowerCase();
    return `https://interstate21.com/tesla-app/images/${model}/${color}.jpg`;
  }
}
