import { Injectable } from '@angular/core';
import { LoginData } from 'src/app/components/forms/login/formLogin.component';
import { RegistrationData } from 'src/app/components/forms/registration/registration.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token = environment.AUTH_KEY;

  constructor() {}

  store(user: RegistrationData): void {
    localStorage.setItem(this.token, JSON.stringify(user));
  }

  login(user: LoginData): boolean {
    const storageUser = localStorage.getItem(this.token);
    if (!storageUser) return false;

    const { email, password } = JSON.parse(storageUser);
    return user.email === email && user.password === password;
  }
}
