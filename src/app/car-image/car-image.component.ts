import { Component, OnInit } from '@angular/core';
import { State } from '../shared/state';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-car-image',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './car-image.component.html',
  styleUrl: './car-image.component.scss'
})
export class CarImageComponent {
  imageUrl$: Observable<string>;

  constructor(protected state: State) {
    this.imageUrl$ = this.state.getCurrentImageUrl().pipe(startWith(''));
  }
}
