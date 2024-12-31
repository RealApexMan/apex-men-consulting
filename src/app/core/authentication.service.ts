import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly #http = inject(HttpClient);

  register(email: string, password: string): Observable<unknown>{
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
    const body = {email, password, returnSecureToken: true};
    return this.#http.post<unknown>(url, body);
  }

}
