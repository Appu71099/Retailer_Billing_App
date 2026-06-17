import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {

    console.log('Form Submitted');
    console.log('Form Valid:', this.loginForm.valid);
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);
      console.log('Email:', this.loginForm.get('email')?.value);
      console.log('Password:', this.loginForm.get('password')?.value);
      console.log('Remember Me:', this.loginForm.get('rememberMe')?.value);
      // Add your authentication logic here

       this.router.navigate(['/dashboard']);
    } else {
      console.log('Form is invalid');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
