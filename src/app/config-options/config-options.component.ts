import {Component, OnInit} from '@angular/core';
import {CarConfig, CarModel, CarOptions} from "../shared/interfaces";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {StepsComponent} from "../steps/steps.component";
import {State} from "../shared/state";
import {CarImageComponent} from "../car-image/car-image.component";

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    StepsComponent,
    CarImageComponent,
    AsyncPipe,
    CurrencyPipe
  ],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.scss'
})
export class ConfigOptionsComponent implements OnInit{

  selectedModel: CarModel | undefined;
  options: CarOptions | undefined;
  selectedConfig: CarConfig | undefined;
  towHitch: boolean = false;
  yokeSteeringWheel: boolean = false;

  constructor(protected state: State) {}

  ngOnInit(): void {
    this.state.selectedModel$.subscribe(model => this.selectedModel = model);
    this.state.selectedConfig$.subscribe(config => this.selectedConfig = config);
    this.state.options$.subscribe(options => this.options = options);
    this.state.towHitch$.subscribe(th => this.towHitch = th);
    this.state.yokeSteeringWheel$.subscribe(yoke => this.yokeSteeringWheel = yoke);
  }

  onConfigChange(config: CarConfig): void {
    this.state.setSelectedConfig(config);
    this.state.setStep3Accessible(true)
  }

  onTowHitchChange(towHitch: boolean): void {
    this.state.setTowHitch(towHitch);
  }

  onYokeSteeringWheelChange(yokeSteeringWheel: boolean): void {
    this.state.setYokeSteeringWheel(yokeSteeringWheel)
  }
}
