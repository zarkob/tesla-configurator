import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
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

  constructor(protected state: State) { }

}
