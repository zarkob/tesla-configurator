import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CarColor, CarModel} from "../shared/interfaces";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-model-color',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './model-color.component.html',
  styleUrl: './model-color.component.scss'
})
export class ModelColorComponent {
  @Input() models: CarModel[] = [];
  @Input() selectedModel?: CarModel;
  @Input() selectedColor?: CarColor;

  @Output() modelChange = new EventEmitter<CarModel>();
  @Output() colorChange = new EventEmitter<CarColor>();

  onModelChange() {
    this.modelChange.emit(this.selectedModel);
    this.selectedColor = this.selectedModel?.colors[0];
    this.colorChange.emit(this.selectedColor);
  }

  onColorChange() {
    this.colorChange.emit(this.selectedColor);
  }

}
