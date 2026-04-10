import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupService } from '../../services/signup-service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  constructor(private signupService: SignupService) {}

  public signup(signupForm: NgForm) {
    if (signupForm.valid) {
      const { name, mobileNumber, password } = signupForm.value;

      this.signupService.signup(name, mobileNumber, password).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error('Signup failed', err);
        },
      });
    }
  }
}
