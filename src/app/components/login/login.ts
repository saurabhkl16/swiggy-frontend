import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { MainService } from '../../services/main-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public mobileNumber: String = '9881597119';
  public password: String = '1234';

  constructor(
    private router: Router,
    private mainService: MainService,
    private loginService: LoginService,
  ) {}

  public login(loginForm: NgForm) {
    if (loginForm.valid) {
      const { mobileNumber, password } = loginForm.value;
      this.loginService.login(mobileNumber, password).subscribe({
        next: (res) => {
          this.mainService.isLogin.set(true);
          this.router.navigate(['/home']);
          this.mainService.showSuccess(res.message);
        },
        error: (err) => {
          this.mainService.showError(err.error.message);
        },
      });
    }
  }
}
