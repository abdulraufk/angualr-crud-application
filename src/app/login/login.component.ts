import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { AppComponent } from '../app.component';
import { SignupComponent } from '../signup/signup.component';

import {
  FormControl,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public name: any;
  public email: any;
  public data1: any;
  // public : any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LoginComponent,
    private http: HttpClient,
    private router: Router,
    private service: ServiceService,
    private fb: FormBuilder,
    private metadialogref: MatDialogRef<LoginComponent>
  ) {
    this.data1 = data;
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          //  Validators.pattern(/^(?=.*[a-z]){5,15}$/)
        ],
      ],
    });

    console.log(this.data1.name);
    this.loginForm.controls.name.setValue(this.data1.name);
    this.loginForm.controls.email.setValue(this.data1.email);
    this.loginForm.controls.password.setValue(this.data1.password);

    console.log(this.data1);
    // this.loginForm.patchValue(this.data);
  }

  onSubmit() {
    let formdata1 = {
      name: this.loginForm.value.name,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    // console.log(this.loginForm.value);

    this.service.update(this.data1._id, formdata1).subscribe({
      next: (res) => {
        alert('data update added successfuly');
        // this.loginForm.reset();
        // this.metadialogref.close();
      },
      error: () => {
        alert('error while addind data');
      },
    });
  }
  // }
}
