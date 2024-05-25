import {booleanAttribute, Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {State} from "../shared/state";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {

  constructor(private router: Router, protected state: State) { }

}
