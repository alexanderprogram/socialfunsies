import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'temp' && this.password === 'temp') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }

  onRegister() {
    //this.router.navigate(['/register']);
    console.log('Register not implemented');
  }
}
