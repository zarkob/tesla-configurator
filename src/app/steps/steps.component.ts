import {booleanAttribute, Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  @Input({transform: booleanAttribute}) canProceed: boolean = false;

  constructor(private router: Router) { }

}
