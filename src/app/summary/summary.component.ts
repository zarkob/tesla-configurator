import { Component, OnInit } from '@angular/core';
import { CarModel, CarColor, CarConfig } from '../shared/interfaces';
import {State} from "../shared/state";
import {StepsComponent} from "../steps/steps.component";
import {CarImageComponent} from "../car-image/car-image.component";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    StepsComponent,
    CarImageComponent,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})

export class SummaryComponent implements OnInit {
  towPrice: number = 1000;
  yokePrice: number = 1000;
  selectedModel?: CarModel;
  selectedColor?: CarColor;
  selectedConfig?: CarConfig;
  towHitch?: boolean;
  yokeSteeringWheel?: boolean;
  totalCost: number = 0;

  constructor(private state: State) {}

  ngOnInit(): void {
    this.state.selectedModel$.subscribe(model => {
      this.selectedModel = model;
    });
    this.state.selectedColor$.subscribe(color => {
      this.selectedColor = color;
    });
    this.state.selectedConfig$.subscribe(config => {
      this.selectedConfig = config;
      this.calculateTotalCost();
    });
    this.state.towHitch$.subscribe(towHitch => {
      this.towHitch = towHitch;
      this.calculateTotalCost();
    });
    this.state.yokeSteeringWheel$.subscribe(yokeSteeringWheel => {
      this.yokeSteeringWheel = yokeSteeringWheel;
      this.calculateTotalCost();
    });
  }

  calculateTotalCost(): void {
    this.totalCost = 0;
    if (this.selectedConfig) {
      this.totalCost += this.selectedConfig.price;
    }
    if (this.selectedColor) {
      this.totalCost += this.selectedColor.price;
    }
    if (this.towHitch) {
      this.totalCost += 1000;
    }
    if (this.yokeSteeringWheel) {
      this.totalCost += 1000;
    }
  }
}
