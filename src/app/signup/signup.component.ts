import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { MatDialogRef } from '@angular/material/dialog';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Inject } from '@angular/core';

import {
  FormControl,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public username: string = '';
  public email: string = '';
  public password: string = '';

  // @Inject(MAT_DIALOG_DATA) public data: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: ServiceService,
    private fb: FormBuilder,
    private metadialogref: MatDialogRef<SignupComponent>
  ) {
    // console.log(this.data)
  }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        //  Validators.pattern(/^(?=.*[a-z]){5,15}$/)
      ],
    ],
  });

  onSubmit() {
    let formdata = {
      name: this.loginForm.value.username,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(this.loginForm.value);
    this.service.adddata(formdata).subscribe({
      next: (res) => {
        alert('data added successfuly');
        this.loginForm.reset();
        this.metadialogref.close(true);
       
      },
      error: () => {
        alert('error while addind data');
      },
    });
  }
  // }
}
