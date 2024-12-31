import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'apex-men-consulting';

/*
  constructor() {
    this.#authenticationService
    .register('email', 'password')
    .subscribe((response) => {
      console.log(response);
    })
  }*/
}
