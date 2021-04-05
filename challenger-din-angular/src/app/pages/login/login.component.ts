import { Component, OnInit } from '@angular/core';
import { RegistrationData } from 'src/app/components/forms/registration/registration.component';
import { LoginData } from 'src/app/components/forms/login/formLogin.component';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = 'registration';
  error = '';

  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {}

  registration(user: RegistrationData): void {
    if (!user.name) return;
    this.user.store(user);
    this.router.navigateByUrl('/pokemons');
  }

  login(user: LoginData): void {
    if (this.user.login(user)) {
      this.router.navigateByUrl('/pokemons');
    } else {
      this.error = 'usuario e ou senha invalidos';
    }
  }
}
