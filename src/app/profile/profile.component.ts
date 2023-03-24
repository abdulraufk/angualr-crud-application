import { Component } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public email: string = '';
  public email1: string = '';
  public password: string = '';
  public password1: string = '';
  public users: any;
  public userspic: any;
  public name: string = '';
  file: any;
  showLoginForm = false;
  uploadimage = false;
  showdata = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: ServiceService
  ) {}

  onSubmit() {}

  viewuser() {
    this.service.viewuser().subscribe((response) => {
      this.users = response;
    });
  }

  // logout user api

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/']);
  }

  // upload image into db api

  getfile(event: any) {
    this.file = event.target.files[0];
  }
  uploadimg() {
    const formdata = new FormData();
    formdata.append('image', this.file, this.file.name);
    this.http
      .post('http://localhost:3302/uploadimg', formdata)
      .subscribe((res) => {
        console.log('res=>', res);
      });
  }

  // delete user
  // deletedata() {
  //   this.service.deleteUserData().subscribe((res) => {
  //     window.localStorage.clear();
  //     this.router.navigate(['/login']);
  //   });
  // }
  // update user
  // updatedata() {
  //   let formdata = {
  //     email: this.email1,
  //     password: this.password1,
  //   };
  //   this.service.update(formdata).subscribe((res: any) => {
  //     console.log('res=>', res);
  //     this.router.navigate(['/login']);
  //   });
  // }
}
