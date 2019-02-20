import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rec-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  sub: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userId: [ null, [ Validators.required ] ]
    });
  }

  submitForm(): void {
    if (this.loginForm && this.loginForm.controls) {
      this.sub = this.authService
      .login(this.loginForm.controls.userId.value).subscribe(data => {
        if (data) {
          this.loginForm.reset();
          this.message.create('success', 'Login successfully!');
        } else {
          this.message.create('error', 'Login Failure');
        }
      });
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  getUserId() {
    return this.authService.userId;
  }

  logout() {
    this.message.create('success', 'You have sign out successfully!');
    this.authService.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
