import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  @Input({transform: booleanAttribute}) canProceed: boolean = false;

}
