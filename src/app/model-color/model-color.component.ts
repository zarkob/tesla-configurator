import {Component, OnInit} from '@angular/core';
import {CarColor, CarModel} from "../shared/interfaces";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {State} from "../shared/state";

@Component({
  selector: 'app-model-color',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './model-color.component.html',
  styleUrl: './model-color.component.scss'
})
export class ModelColorComponent implements OnInit {

  selectedModel: CarModel | undefined;
  selectedColor: CarColor | undefined;

  constructor(protected state: State) {}

  ngOnInit(): void {
    this.state.selectedModel$.subscribe(model => this.selectedModel = model);
    this.state.selectedColor$.subscribe(color => this.selectedColor = color);
  }

  onModelChange(model: CarModel): void {
    this.selectedModel = model;
    this.state.setSelectedModel(model);
    this.state.setSelectedColor(model.colors[0]);
    this.state.setSelectedConfig(undefined);
    this.state.setStep2Accessible(true);
    this.state.setStep3Accessible(false);
    this.state.setTowHitch(false);
    this.state.setYokeSteeringWheel(false);
  }

  onColorChange(color: CarColor): void {
    this.selectedColor = color;
    this.state.setSelectedColor(color);
  }
}
