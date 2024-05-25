import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarConfig, CarModel, CarOptions} from "../shared/interfaces";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {StepsComponent} from "../steps/steps.component";
import {State} from "../shared/state";
import {Observable} from "rxjs";
import {CarImageComponent} from "../car-image/car-image.component";
import {ApiClientService} from "../api-client.service";

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    StepsComponent,
    CarImageComponent,
    AsyncPipe
  ],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.scss'
})
export class ConfigOptionsComponent implements OnInit{

  selectedModel$: Observable<CarModel | undefined>;
  selectedModel: CarModel | undefined;
  selectedConfig$: Observable<CarConfig | undefined>;
  selectedConfig: CarConfig | undefined;
  towHitch$: Observable<boolean>;
  towHitch: boolean = false;
  yokeSteeringWheel$: Observable<boolean>;
  yokeSteeringWheel: boolean = false;

  constructor(private apiClientService: ApiClientService, protected state: State) {
    this.selectedModel$ = this.state.selectedModel$;
    this.selectedConfig$ = this.state.selectedConfig$;
    this.towHitch$ = this.state.towHitch$;
    this.yokeSteeringWheel$ = this.state.yokeSteeringWheel$;
    // this.imageUrl$ = this.state.getCurrentImageUrl();
  }

  ngOnInit(): void {
    this.selectedModel$.subscribe(model => this.selectedModel = model);
    this.selectedConfig$.subscribe(config => this.selectedConfig = config);
    this.towHitch$.subscribe(th => this.towHitch = th);
    this.yokeSteeringWheel$.subscribe(yoke => this.yokeSteeringWheel = yoke);

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
