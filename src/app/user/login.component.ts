import { CheckMaskUser } from './state/user.action';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../user/state/user.reducer';
import * as fromRoot from '../state/app.state';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';
  errorMessage: string;

  maskUserName: boolean;

  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.store.select(fromStore.getCheckMastUserName).subscribe(data => {
      this.maskUserName = data;
    });

  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(value: boolean): void {
    // this.maskUserName = value;
    this.store.dispatch(new CheckMaskUser(value));
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
