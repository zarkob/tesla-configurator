import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, map, startWith} from "rxjs";
import {CarColor, CarConfig, CarModel, CarOptions} from "./interfaces";
import {ApiClientService} from "../api-client.service";

@Injectable({
  providedIn: 'root'
})
export class State {
  canGoToStep3: boolean = false;
  models: CarModel[] = [];
  options: CarOptions | undefined;
  private step2Accessible = new BehaviorSubject<boolean>(false);
  private step3Accessible = new BehaviorSubject<boolean>(false);
  private selectedModelSubject = new BehaviorSubject<CarModel | undefined>(undefined);
  private selectedColorSubject = new BehaviorSubject<CarColor | undefined>(undefined);
  private selectedConfigSubject = new BehaviorSubject<CarConfig | undefined>(undefined);
  private towHitchSubject = new BehaviorSubject<boolean>(false);
  private yokeSteeringWheelSubject = new BehaviorSubject<boolean>(false);

  selectedModel$ = this.selectedModelSubject.asObservable();
  selectedColor$ = this.selectedColorSubject.asObservable();
  selectedConfig$ = this.selectedConfigSubject.asObservable();
  towHitch$ = this.towHitchSubject.asObservable();
  yokeSteeringWheel$ = this.yokeSteeringWheelSubject.asObservable();
  step2Accessible$ = this.step2Accessible.asObservable();
  step3Accessible$ = this.step3Accessible.asObservable();

  constructor(private readonly apiClientService: ApiClientService) {
    this.apiClientService.getModels().subscribe(data => {
      this.models = data;
    });
  }

  setSelectedModel(model: CarModel) {
    this.selectedModelSubject.next(model);
    this.apiClientService.getOptions(model.code!).subscribe(data => {
      this.options = data;
    });
  }

  setSelectedColor(color: CarColor) {
    this.selectedColorSubject.next(color);
  }

  setSelectedConfig(config: CarConfig) {
    this.selectedConfigSubject.next(config);
  }

  setTowHitch(towHitch: boolean) {
    this.towHitchSubject.next(towHitch);
  }

  setYokeSteeringWheel(yokeSteeringWheel: boolean) {
    this.yokeSteeringWheelSubject.next(yokeSteeringWheel);
  }

  setStep2Accessible(isAccessible: boolean) {
    this.step2Accessible.next(isAccessible);
    // this.step2Accessible.next(this.selectedModelSubject.value !== undefined && this.selectedColorSubject.value !== undefined);
  }

  setStep3Accessible(isAccessible: boolean) {
    this.step3Accessible.next(isAccessible);
    // this.step3Accessible.next(this.selectedConfigSubject.value !== undefined);
  }

  getCurrentImageUrl() {
    return combineLatest([this.selectedModel$, this.selectedColor$]).pipe(
      map(([model, color]) => {
        if (!model || !color) {
          return '';
        }
        const modelCode = model.code.toUpperCase();
        const colorCode = color.code.toLowerCase();
        return `https://interstate21.com/tesla-app/images/${modelCode}/${colorCode}.jpg`;
      }),
      startWith('') // Ensure the observable starts with an empty string
    );
  }
}
