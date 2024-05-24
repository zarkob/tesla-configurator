import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, map, startWith} from "rxjs";
import {CarColor, CarConfig, CarModel} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class State {
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

  setSelectedModel(model: CarModel) {
    this.selectedModelSubject.next(model);
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

  canProceed() {
    return this.selectedModelSubject.value !== undefined && this.selectedColorSubject.value !== undefined;
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
  // getCurrentImageUrl() {
  //   return combineLatest([this.selectedModel$, this.selectedColor$]).pipe(
  //     map(([model, color]) => {
  //       if (!model || !color) {
  //         return '';
  //       }
  //       const modelCode = model.code.toUpperCase();
  //       const colorCode = color.code.toLowerCase();
  //       console.log('MODEL:', modelCode);
  //       console.log('COLOR:', colorCode);
  //       console.log('https://interstate21.com/tesla-app/images/', modelCode, '/', colorCode, '.jpg');
  //       return `https://interstate21.com/tesla-app/images/${modelCode}/${colorCode}.jpg`;
  //     }),
  //     startWith('')
  //   );
  // }
}
