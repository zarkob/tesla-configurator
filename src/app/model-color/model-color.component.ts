import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarColor, CarModel} from "../shared/interfaces";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ApiClientService} from "../api-client.service";
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

  selectedModel$: Observable<CarModel | undefined>;
  selectedColor$: Observable<CarColor | undefined>;
  selectedModel: CarModel | undefined;
  selectedColor: CarColor | undefined;

  constructor(private apiClientService: ApiClientService, protected state: State) {

    this.selectedModel$ = this.state.selectedModel$;
    this.selectedColor$ = this.state.selectedColor$;
  }

  ngOnInit(): void {
    this.selectedModel$.subscribe(model => this.selectedModel = model);
    console.log('SELECTED MODEL IS: ', this.selectedModel);
    this.selectedColor$.subscribe(color => this.selectedColor = color);
    console.log('SELECTED COLOR IS: ', this.selectedColor);
  }

  onModelChange(model: CarModel): void {
    this.selectedModel = model;
    this.state.setSelectedModel(model);
    this.state.setSelectedColor(model.colors[0]);
    this.state.setSelectedConfig(undefined);
    this.state.setStep2Accessible(true);
    this.state.setStep3Accessible(false);
  }

  onColorChange(color: CarColor): void {
    this.selectedColor = color;
    this.state.setSelectedColor(color);
  }
}
