import {Component} from '@angular/core';
import {State} from '../shared/state';
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
  imageUrl: string | undefined;

  constructor(protected state: State) {
    this.state.imgUrl$.subscribe(url => this.imageUrl = url);
  }
}
