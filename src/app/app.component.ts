import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/authentication.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'apex-men-consulting';

  readonly #authenticationService = inject(AuthenticationService);
  onLogin(){
    const email = 'dadzad.doe@gmail.com';
    const password = 'qsddqsdqsqsdqsqs';
    this.#authenticationService.login(email, password).pipe(
      switchMap((response) => {
        const {email, localId, idToken} = response;
        return this.#authenticationService.save(email, localId, idToken);
      })
    )
    .subscribe((response) => console.log(response));
  }
}
